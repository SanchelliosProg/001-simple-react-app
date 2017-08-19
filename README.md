###SIMPLE COMPONENT
Create a ./components/search_bar.js

Declare it as class SearchBar

Make it return input in render()

Export it into dom in index.js

###HANDLE INPUT
In ./components/search_bar.js add onInputChange() function

Assign it to the onChange attribute of input

Log the event.target.value

Place the whole function (make it arrow function) to the onChange attribute

###UPDATE STATE
Init state of the SearchBar in constructor

State should contain only the term:'' field

Update state from input, using arrow function and this.setState function

Output the state's value to the page

Set default value to the state, then add value attribute to the input with state value
###SET UP VIDEO LOAD FROM GOOGLE
get YouTube API key from google

place it as const in ./src/index.js

refactor the ./src/index.js

leave just React and ReactDOM in imports

delete all Middleware related code

create class based component App, which returns div/SearchBar

replace <Provider> with <App/> in RenderDOM.render()

import youtube-api-search from npm

import package to YTSearch variable

create constructor in App with state: videos: [] & selectedVideo: null

call YTSearch in constructor. arg-1 - object:key, term; arg-2 - function, which sets videos:videos and selectedVideo:videos[0] to state
###SET UP VIDEO LIST
create video_list.js file

make it a function based component

export as VideoList

make it return ul with a class col-md-4 list-group

make it accept a props, and print out {props.videos.length}

in index page add VideosList component and pass a videos attr with videos from state
###MAP DATA TO THE LIST AS COMPONENTS
create func-component VideoListItem which returns <li/>

in VideoList map videos from props to the function, which will return VideoItem

pass a result of video mapping to the VideoListItem as video attr

assign result of the mapping function to the const videoItems

then place videoItems into ul of return of the VideoList

use etag as key of videoItems
###DISPLAY LIST OF VIDEOS
inside of VideoListItem assign list-group-item class to li

to li add div with class video-list media

inside li/div add div with class media-left and put there img with class media-object

inside li/div add one more div with class media-body and put there div with class media-heading

put imageUrl from video.snippet.thumbnails.default.url to img src

put title from video.snippet.title to div.media-heading
###Video details
create func-component VideoDetail which accepts {video} as prop

get videoId const from video.id.videoId

get url using http://www.youtube.com/embed/${videoId}

in return add div.video-detail.col-md-8

add div div.embed-responsive.embed-responsive-16by9

add div div iframe.embed-responsive-item with src url

also add on more div.details into the parent div

and add two divs there for video.snippet.title and video.snippet.description

add IF-statement !video then return div with text Loading...
###???
in index.js put VideoDetail below SearchBar and above Video list

pass selectedVideo to VideoDetail from state as video attr

pass onVideoSelect attr to VideoList which passes a function which takes selectedVideo and assign it as result of callback to state of index.js

in VideoList component add attr to videoItems onVideoSelect={props.onVideoSelect}

in VideoListItem component make it accept onVideoSelect as param

and add to li attr onClick={() => onVideoSelect(video)}
###Style
add class search-bar to main SearchBar div

in style.css make .search-bar with margin 20px, text-align: center

.search-bar input with width of 75%

.video-item img with max-width of 64px

.video-detail .details with margin-top of 10px, padding of 10px, border of 1px solid and #ddd, adn with border radius of 4px

.list-group-item with cursor as pointer

.list-group-item:hover with background color of #eee
###Search for videos
in index.js define a function videoSearch which takes term

place YTSearch inside of videoSearch and replace term's surfboards arg with term var

in constructor call this.videoSearch('surfboards')

add as attr to SearchBar onSearchTermChange={term => this.videoSearch(term)}

in SearchBar add function onInputChange(term) with this.setState({term});

also add this.props.onSearchTermChange(term);

replace body of function in onChange of input with it acquiring ot from this

in index.js import lodash

create videoSearch const in render out of _.debounce((term) => {this.videoSearch(term)}, 300);

pass videoSearch to onSearchTermChange