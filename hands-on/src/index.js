import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleware(reducers)}>
    <App />
    </Provider>
    , document.querySelector('.container'));
//SIMPLE COMPONENT
//TODO: 001 - Create a ./components/search_bar.js
//TODO: 002 - Declare it as class SearchBar
//TODO: 003 - Make it return <input/> in render()
//TODO: 004 - Export it into dom in index.js
//HANDLE INPUT
//TODO: 005 - In ./components/search_bar.js add onInputChange() function
//TODO: 006 - Assign it to the onChange attribute of input
//TODO: 007 - Log the event.target.value
//TODO: 008 - Place the whole function (make it arrow function) to the onChange attribute
//UPDATE STATE
//TODO: - Init state of the SearchBar in constructor
//TODO: - State should contain only the term:'' field
//TODO: - Update state from input, using arrow function and this.setState function
//TODO: - Output the state's value to the page
//TODO: - Set default value to the state, then add value attribute to the <input/> with state value
//SET UP VIDEO LOAD FROM GOOGLE
//TODO: - get YouTube API key from google
//TODO: - place it as const in ./src/index.js
//TODO: - refactor the ./src/index.js
//TODO: - leave just React and ReactDOM in imports
//TODO: - delete all Middleware related code
//TODO: - create class based component App, which returns div/SearchBar
//TODO: - replace <Provider> with <App/> in RenderDOM.render()
//TODO: - import youtube-api-search from npm
//TODO: - import package to YTSearch variable
//TODO: - create constructor in App with state: videos: [] & selectedVideo: null
//TODO: - call YTSearch in constructor. arg-1 - object:key, term; arg-2 - function, which sets videos:videos and selectedVideo:videos[0] to state
//SET UP VIDEO LIST
//TODO: - create video_list.js file
//TODO: - make it a function based component
//TODO: - export as VideoList
//TODO: - make it return ul with a class col-md-4 list-group
//TODO: - make it accept a props, and print out {props.videos.length}
//TODO: - in index page add VideosList component and pass a videos attr with videos from state
//MAP DATA TO THE LIST AS COMPONENTS
//TODO: - create func-component VideoListItem which returns <li/>
//TODO: - in VideoList map videos from props to the function, which will return VideoItem
//TODO: - pass a result of video mapping to the VideoListItem as video attr
//TODO: - assign result of the mapping function to the const videoItems
//TODO: - then place videoItems into ul of return of the VideoList
//TODO: - use etag as key of videoItems
//DISPLAY LIST OF VIDEOS
//TODO: - inside of VideoListItem assign list-group-item class to li
//TODO: - to li add div with class video-list media
//TODO: - inside li/div add div with class media-left and put there img with class media-object
//TODO: - inside li/div add one more div with class media-body and put there div with class media-heading
//TODO: - put imageUrl from video.snippet.thumbnails.default.url to img src
//TODO: - put title from video.snippet.title to div.media-heading
//
//TODO: - create func-component VideoDetail which accepts {video} as prop
//TODO: - get videoId const from video.id.videoId
//TODO: - get url using http://www.youtube.com/embed/${videoId}
//TODO: - in return add div.video-detail.col-md-8
//TODO: - add div div.embed-responsive.embed-responsive-16by9
//TODO: - add div div iframe.embed-responsive-item with src url
//TODO: - also add on more div.details into the parent div
//TODO: - and add two divs there for video.snippet.title and video.snippet.description
//TODO: - add IF-statement !video then return div with text Loading...
//
//TODO: - in index.js put VideoDetail below SearchBar and above Video list
//TODO: - pass selectedVideo to VideoDetail from state as video attr
//TODO: - pass onVideoSelect attr to VideoList which passes a function which takes selectedVideo and assign it as result of callback to state of index.js
//TODO: - in VideoList component add attr to videoItems onVideoSelect={props.onVideoSelect}
//TODO: - in VideoListItem component make it accept onVideoSelect as param
//TODO: - and add to li attr onClick={() => onVideoSelect(video)}
//Style
//TODO: - add class search-bar to main SearchBar div
//TODO: - in style.css make .search-bar with margin 20px, text-align: center
//TODO: - .search-bar input with width of 75%
//TODO: - .video-item img with max-width of 64px
//TODO: - .video-detail .details with margin-top of 10px, padding of 10px, border of 1px solid and #ddd, adn with border radius of 4px
//TODO: - .list-group-item with cursor as pointer
//TODO: - .list-group-item:hover with background color of #eee
//Search for videos
//TODO: - in index.js define a function videoSearch which takes term
//TODO: - place YTSearch inside of videoSearch and replace term's surfboards arg with term var
//TODO: - in constructor call this.videoSearch('surfboards')
//TODO: - add as attr to SearchBar onSearchTermChange={term => this.videoSearch(term)}
//TODO: - in SearchBar add function onInputChange(term) with this.setState({term});
//TODO: - also add this.props.onSearchTermChange(term);
//TODO: - replace body of function in onChange of input with it acquiring ot from this
//TODO: - in index.js import lodash
//TODO: - create videoSearch const in render out of _.debounce((term) => {this.videoSearch(term)}, 300);
//TODO: - pass videoSearch to onSearchTermChange