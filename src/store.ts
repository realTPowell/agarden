import { atom, computed } from 'nanostores';

function getSearch() {
  if (typeof window === "undefined") {
    return "";
  }
  return window.location.search;
}

// parses the search string into a JSON object with either single or array values
function parseSearch(search) {
	const urlSearchParams = new URLSearchParams(search);
	const entries = Array.from(urlSearchParams.entries());
	const result = {};
	for (const [key, value] of entries) {
	if (key in result) {
	  if (Array.isArray(result[key])) {
	    result[key].push(value);
	  } else {
	    result[key] = [result[key] ?? "", value];
	  }
	} else {
	  result[key] = value;
	}
	}
	return result;
}

// factory to return the store generator after attaching necessary listeners
function initQueryStore() {
	const $internalSearch = atom(getSearch());
	const $qs = computed($internalSearch, (search) => {
		return parseSearch(search);
	});

	// layer of memoisation
	function updateSearch() {
		const search = getSearch();
		if ($internalSearch.get() === search) return;
		$internalSearch.set(search);
	}

	function setupListeners() {
		if (typeof window === "undefined") return;

		// Listen to popstate and pushState/replaceState

		window.addEventListener("popstate", updateSearch);

		const pushState = history.pushState;
		history.pushState = (...args) => {
			pushState.apply(history, args);
			updateSearch();
		};
		const replaceState = history.replaceState;
		history.replaceState = (...args) => {
			replaceState.apply(history, args);
			updateSearch();
		}
	}
	
	// I honestly have no idea why nanostores-qs does it this way?
	// TODO: try without once working
	setupListeners();

	const createSearchParamStore = (name) => {
		function getParsedValues(qsRecord) {
			const qsValue = !(name in qsRecord) ? undefined : qsRecord[name];
			// nanostores-qs gets into a whole malarkey with handling array values
			return qsValue
		}

		const $values = computed($qs, (qs) => getParsedValues(qs));

		return $values;
	}

	return {
		$qs,
		createSearchParamStore
	}

}

const qs = initQueryStore();
export const $tagValue = qs.createSearchParamStore("tag");
