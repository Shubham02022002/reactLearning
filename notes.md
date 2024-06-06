Browser only knows the javascript. It doesn't know what is react neither our project knows that what is it. 
In order to use react we need to get react into our project. 
For doing this there are many possible ways:-
    1. Via CDN(content delivery networks). 
    Here we are using 2 links one for the core react and the other is for the dom manupulaiion.
    -> For creating elements we need to do the same as we was doing in javascript. 
    i.e  const heading = React.createElement('h1',{},"Hello");
                                       <!-- ^     ^     ^ -->
                                    <!-- tagname   obj   content  -->

    for putting these into our browser dom we neet to use ReactDOM.createRoot(doc.byid(root)). And now render everything which is in our page. 
    The empty object is for giving attributes to the tags.
    What is a react element ? 
    -> React element is nothing but the normal javascript object.   
    What are props ?
    Props are childerens and the attributes that we pass in. 
    How can we create nested elements in react? 
    In the third agrument pass the element you want to insert and it is nested in its parent body. 
    How can we create siblings elements ?
    We need to pass an array in the thrid argument and whatever we want to create comma seperated. 

    More nesting make our code messy and we can't create scalable websites using this only. So to solve this problem we have something know as JSX. 

    Whatever we have written using script tags there order matters a lot. Keep that in mind that the order of these files are always in sequence. 
    Always keep react before the app.js 
    
    If you have something in the root div inside the html then afer rendering parent the root will render the parent and the html code is replace by the parent. 

    We call React is a library because react can be applied on a very small section of a page. React only works in the place where ever you make the root as. React is a barebone minimal javascript library. 

/////////////////////////////////////////////////////////////////////////////////////////



    