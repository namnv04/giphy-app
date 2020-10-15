## Giphy app take home assignment

This app was created using `create-react-app` with `react-route-dom`, Redux and lodash.debounce for infinite scroll feature.

On the onload event of the Homepage, an action is triggered to make a request to Giphy API to get the first 10 trending GIFs. Scrolling down to the bottom will trigger the action to fetch the next 10 trending GIFs and so on.

There is a Search box on top that used to search for GIFs using Giphy API. Enter the search term and click the button will trigger an action to fetch 10 items based on the search term. The results will be displayed on the page. Scroll down to the bottom will trigger action to fetch the next 10 items based on the search term and so on.

Whenever a network request is pending, there is a loading indicator at the bottom of the page showing the request is in progresss. This may be hard to see when internet is fast.

## Improvments

In the store/actions.tsx files. The `handleSearch` and `loadMore` action has many code the can be shared and thus avoid code duplication.

Another thing to point out is the Redux store is keeping the result for trending GIFs and searching GIFs as one data point in the store (`state.GIF.items`). These two lists could be kept separately in the store so that when users switch from search results page to the home page, the homepage can display GIFs already in Redux store and not having to make network requests to get trending GIFs again.

## Remaining Work

1. Auto complete or search suggestion feature.
2. Optimize to trigger loadmore action a bit ealier before reaching end of page
3. Responsive grid for better GIF layout
4. Make the query params for pagination configurable
5. Some gif has duplicated IDs causes error
6. Reset search to show trending results
7. Handle error response cases
8. Optimize loading spinner
