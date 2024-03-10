const form = document.querySelector("#form1");
form.addEventListener('submit', async function(evt){
    //why do we need an async here?
    evt.preventDefault();
    const query=form.elements.query.value;
    const config = {params:{q: query}};
    const response = await axios.get(`https://api.tvmaze.com/search/shows`,config)
    console.log(response.data[0].show.name);
    /*
    let index = 0;
    for (const item of response.data){
        index ++;
        const addedContent = document.createElement('div');
        addedContent.innerHTML = `${index} ${item.show.name} ${item.show.premiered}`;
        document.body.append(addedContent);
    }
    */

    createMovieList(response.data);
})
    //Turn this into a function!
    const createMovieList = (query) => {
        let index = 0;
        for (let item of query){
            index ++;
            const addedContent = document.createElement('div');
            addedContent.innerHTML = `${index} ${item.show.name} ${item.show.premiered}`;
            document.body.append(addedContent);
    }
    }