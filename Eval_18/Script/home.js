	
//const api = 'https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=f1e08c3cd0854dcd814bc0c4906fd5ed'
//f1e08c3cd0854dcd814bc0c4906fd5ed

const showData = document.getElementById('show');
const showData1 = document.getElementById('show1');

getData();

	async function getData(){
					
		const res = await fetch(`https://newsapi.org/v2/everything?q=tesla&from=2021-09-18&sortBy=publishedAt&apiKey=f1e08c3cd0854dcd814bc0c4906fd5ed`);
		const resData = await res.json();
		console.log("resData" , resData);
		showNews(resData.articles);
		displayNews( resData.articles[0]);
		
	}
	
	function getNews(){
		showData.innerHTML = null;
		showData1.innerHTML = null;
		
	}
	
	function showNews(allnews){
	 
		showData.innerHTML = "";
		allnews.forEach((news) => {
			const {  title , author } = news;
			const NewsEl  = document.createElement('div');
			
			NewsEl.classList.add("news");
			NewsEl.addEventListener("click", function(){
				window.location.href = "news.html";
				
			});
			
			NewsEl.innerHTML = `<b>${title}</b>
             <span>${author}</span>`;
			showData.appendChild(NewsEl);
		});
	}
	
	function displayNews(sd){
		showData1.innerHTML = "";
			const {  title , author , urlToImage } = sd;
			const NewsEl  = document.createElement('div');
			
			NewsEl.classList.add("news1");
			NewsEl.innerHTML = `<b>${title}</b>
             <span>${author}</span>
             <img src = "${urlToImage}" alt = "${title}">`;
			showData1.appendChild(NewsEl);
		
	}
	function displayNewDetails(){
		window.location.href = "news.html";
	}