var count = 0;
var el = document.querySelector(".outside") ;
el.style.left = "0px"; //default값으로 설정
 
function run(){
    if(count>40){ //count가 40을 넘으면 return
        return
    }
    count += 2 //  2px씩 증가. 
    el.style.left = parseInt(el.style.left) + count + "px";
    console.log(el.style.left);
    requestAnimationFrame(run); 
    // reqeustAnimationFrame()함수를 통해서 원하는 함수를 인자로 넣어준다.
    // 브라우저는 인자로 받은 그 비동기 함수가 실행될 적절한 타이밍에 실행시켜줌.
}
requestAnimationFrame(run);

