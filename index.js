exports.handler = (event, context, callback) => {
    console.log("Received event {}", JSON.stringify(event, 3));
    var posts = {
         "1": {"id": "1", "title": "First book", "author": "Author1", "url": "https://amazon.com/", "content": "SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1 SAMPLE TEXT AUTHOR 1", "ups": "100", "downs": "10"},
         "2": {"id": "2", "title": "Second book", "author": "Author2", "url": "https://amazon.com", "content": "SAMPLE TEXT AUTHOR 2 SAMPLE TEXT AUTHOR 2 SAMPLE TEXT", "ups": "100", "downs": "10"},
         "3": {"id": "3", "title": "Third book", "author": "Author3", "url": null, "content": null, "ups": null, "downs": null },
         "4": {"id": "4", "title": "Fourth book", "author": "Author4", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4 SAMPLE TEXT AUTHOR 4", "ups": "1000", "downs": "0"},
         "5": {"id": "5", "title": "Fifth book", "author": "Author5", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 5 SAMPLE TEXT AUTHOR 5 SAMPLE TEXT AUTHOR 5 SAMPLE TEXT AUTHOR 5 SAMPLE TEXT", "ups": "50", "downs": "0"},
         "6": {"id": "6", "title": "Fifth book", "author": "Author6", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 6 SAMPLE TEXT AUTHOR 6 SAMPLE TEXT AUTHOR 6 SAMPLE TEXT AUTHOR 6 SAMPLE TEXT", "ups": "60", "downs": "0"},
         "7": {"id": "7", "title": "Fifth book", "author": "Author7", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 7 SAMPLE TEXT AUTHOR 7 SAMPLE TEXT AUTHOR 7 SAMPLE TEXT AUTHOR 7 SAMPLE TEXT", "ups": "70", "downs": "0"},
         "8": {"id": "8", "title": "Fifth book", "author": "Author8", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 8 SAMPLE TEXT AUTHOR 8 SAMPLE TEXT AUTHOR 8 SAMPLE TEXT AUTHOR 8 SAMPLE TEXT", "ups": "80", "downs": "0"},
         "9": {"id": "9", "title": "Fifth book", "author": "Author9", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 9 SAMPLE TEXT AUTHOR 9 SAMPLE TEXT AUTHOR 9 SAMPLE TEXT AUTHOR 9 SAMPLE TEXT", "ups": "90", "downs": "0"},
         "10": {"id": "10", "title": "Fifth book", "author": "Author10", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 10 SAMPLE TEXT AUTHOR 10 SAMPLE TEXT AUTHOR 10 SAMPLE TEXT AUTHOR 10 SAMPLE TEXT", "ups": "100", "downs": "0"},
         "11": {"id": "11", "title": "Fifth book", "author": "Author11", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 11 SAMPLE TEXT AUTHOR 11 SAMPLE TEXT AUTHOR 11 SAMPLE TEXT AUTHOR 11 SAMPLE TEXT", "ups": "110", "downs": "0"},
         "12": {"id": "12", "title": "Fifth book", "author": "Author12", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 12 SAMPLE TEXT AUTHOR 12 SAMPLE TEXT AUTHOR 12 SAMPLE TEXT AUTHOR 12 SAMPLE TEXT", "ups": "120", "downs": "0"},
         "13": {"id": "13", "title": "Fifth book", "author": "Author13", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 13 SAMPLE TEXT AUTHOR 13 SAMPLE TEXT AUTHOR 13 SAMPLE TEXT AUTHOR 13 SAMPLE TEXT", "ups": "130", "downs": "0"},
         "14": {"id": "14", "title": "Fifth book", "author": "Author14", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 14 SAMPLE TEXT AUTHOR 14 SAMPLE TEXT AUTHOR 14 SAMPLE TEXT AUTHOR 14 SAMPLE TEXT", "ups": "140", "downs": "0"},
         "15": {"id": "15", "title": "Fifth book", "author": "Author15", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 15 SAMPLE TEXT AUTHOR 15 SAMPLE TEXT AUTHOR 15 SAMPLE TEXT AUTHOR 15 SAMPLE TEXT", "ups": "150", "downs": "0"},
         "16": {"id": "16", "title": "Fifth book", "author": "Author16", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 16 SAMPLE TEXT AUTHOR 16 SAMPLE TEXT AUTHOR 16 SAMPLE TEXT AUTHOR 16 SAMPLE TEXT", "ups": "160", "downs": "0"},
         "17": {"id": "17", "title": "Fifth book", "author": "Author17", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 17 SAMPLE TEXT AUTHOR 17 SAMPLE TEXT AUTHOR 17 SAMPLE TEXT AUTHOR 17 SAMPLE TEXT", "ups": "170", "downs": "0"},
         "18": {"id": "18", "title": "Fifth book", "author": "Author18", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 18 SAMPLE TEXT AUTHOR 18 SAMPLE TEXT AUTHOR 18 SAMPLE TEXT AUTHOR 18 SAMPLE TEXT", "ups": "180", "downs": "0"},
         "19": {"id": "19", "title": "Fifth book", "author": "Author19", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 19 SAMPLE TEXT AUTHOR 19 SAMPLE TEXT AUTHOR 19 SAMPLE TEXT AUTHOR 19 SAMPLE TEXT", "ups": "190", "downs": "0"},
         "20": {"id": "20", "title": "Fifth book", "author": "Author20", "url": "https://www.amazon.com/", "content": "SAMPLE TEXT AUTHOR 20 SAMPLE TEXT AUTHOR 20 SAMPLE TEXT AUTHOR 20 SAMPLE TEXT AUTHOR 20 SAMPLE TEXT", "ups": "200", "downs": "0"}
    };

    var relatedPosts = {
        "1": [posts['4']],
        "2": [posts['3'], posts['5']],
        "3": [posts['2'], posts['1']],
        "4": [posts['2'], posts['1']],
        "5": [],
        "6": [ posts['7'], posts['8'], posts['9'], posts['10'], posts['11'], posts['12'], posts['13'], posts['14']],
        "7": [posts['6'],  posts['8'], posts['9'], posts['10'], posts['11'], posts['12'], posts['13'], posts['14']],
        "8": [posts['6'], posts['7'],  posts['9'], posts['10'], posts['11'], posts['12'], posts['13'], posts['14']],
        "9": [posts['6'], posts['7'], posts['8'],  posts['10'], posts['11'], posts['12'], posts['13'], posts['14']],
        "10": [posts['6'], posts['7'], posts['8'], posts['9'], posts['11'], posts['12'], posts['13'], posts['14']],
        "11": [ posts['12'], posts['13'], posts['14'], posts['15'], posts['6'], posts['7'], posts['8'], posts['9'], posts['10']],
        "12": [posts['11'],  posts['13'], posts['14'], posts['15'], posts['6'], posts['7'], posts['8'], posts['9'], posts['10']],
        "13": [posts['11'], posts['12'],  posts['14'], posts['15'], posts['6'], posts['7'], posts['8'], posts['9'], posts['10']],
        "14": [posts['11'], posts['12'], posts['13'],  posts['15'], posts['6'], posts['7'], posts['8'], posts['9'], posts['10']],
        "15": [posts['11'], posts['12'], posts['13'], posts['14'], posts['6'], posts['7'], posts['8'], posts['9'], posts['10']],
        "16": [ posts['17'], posts['18'], posts['19'], posts['20']],
        "17": [posts['16'],  posts['18'], posts['19'], posts['20']],
        "18": [posts['16'], posts['17'],  posts['19'], posts['20']],
        "19": [posts['16'], posts['17'], posts['18'],  posts['20']],
        "20": [posts['16'], posts['17'], posts['18'], posts['19']]
    };

    console.log("Got an Invoke Request.");
    var field = "";
    if (Array.isArray(event)) {
        field = event[0].field;
    } else {
        field = event.field;
    }
    
    switch(field) {
        case "getPost":
            var id = event.arguments.id;
            callback(null, posts[id]);
            break;
        case "allPosts":
            var values = [];
            for(var d in posts){
                values.push(posts[d]);
            }
            callback(null, values);
            break;
        case "addPost":
            // return the arguments back
            callback(null, event.arguments);
            break;
        case "addPostErrorWithData":
            var id = event.arguments.id;
            var result = posts[id];
            // attached additional error information to the post
            result.errorMessage = 'Error with the mutation, data has changed';
            result.errorType = 'MUTATION_ERROR';
            callback(null, result);
            break;
        case "relatedPosts":
            // Batch invoke
            var results = [];
            // the response MUST contain the same number
            // of entries as the payload array
            for (var i=0; i< event.length; i++) {
                console.log("post {}", JSON.stringify(event[i].source));
                results.push(relatedPosts[event[i].source.id]);
            }
            console.log("results {}", JSON.stringify(results));
            callback(null, results);
            
            
            /*
            // Code for single invoke operation
            var id = event.source.id;
            callback(null, relatedPosts[id]);
            */
            break;
        default:
            callback("Unknown field, unable to resolve" + event.field, null);
            break;
    }
};
