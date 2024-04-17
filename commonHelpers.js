import{a as b,S as w,i as h}from"./assets/vendor-06b1bbdf.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const S="43248873-3ce9b820c5f26b6ef0afaa018",v="https://pixabay.com/api/";async function m(e,s=1,o=15){const a={key:S,q:e,image_type:"photo",orientation:"horizontal",safesearch:"true",page:s,per_page:o};try{const r=(await b.get(v,{params:a})).data;if(r.hits.length===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return{images:r.hits,totalHits:r.totalHits}}catch{throw new Error("Network response was not ok")}}const p=document.querySelector(".gallery");function g(e){e.forEach(o=>{const a=`
            <div class="gallery-item">
                <a href="${o.largeImageURL}">
                    <img src="${o.webformatURL}" alt="${o.tags}" />
                </a>
                <div class="image-info">
                    <p>Likes: ${o.likes}</p>
                    <p>Views: ${o.views}</p>
                    <p>Comments: ${o.comments}</p>
                    <p>Downloads: ${o.downloads}</p>
                </div>
            </div>
        `;p.insertAdjacentHTML("beforeend",a)}),new w(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}const L=document.querySelector(".search-form"),y=document.querySelector(".loader"),d=document.querySelector(".load-more-btn");L.addEventListener("submit",E);d.addEventListener("click",H);let n=1,f="";const i=15;async function E(e){e.preventDefault();const s=document.querySelector(".search-input"),o=s.value.trim();if(!o){c("Search query cannot be empty");return}y.style.display="block",p.innerHTML="",n=1,f=o;try{const{images:a,totalHits:t}=await m(f,n,i);I(a,t),l(!0)}catch(a){P(a),l(!1)}s.value=""}function c(e){h.error({title:"Error",message:e})}function q(e){h.success({title:"Success",message:e})}function I(e,s){y.style.display="none",g(e),q("Images loaded successfully"),n*i>=s&&(l(!1),c("We're sorry, but you've reached the end of search results."))}function P(e){y.style.display="none",c(e.message)}function l(e){e?d.style.display="block":d.style.display="none"}async function H(){n+=1;try{const{images:e,totalHits:s}=await m(f,n,i);$(e),n*i>=s&&(l(!1),c("We're sorry, but you've reached the end of search results."))}catch(e){c(e.message)}}function $(e){g(e),x()}function x(){const e=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
