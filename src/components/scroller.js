const scrollerIcon=document.getElementById("scroller"),scrollerProgress=document.getElementsByClassName("scroller-progress")[0],scrollScreen=document.getElementsByClassName("slides-wrapper")[0];window.addEventListener("load",()=>{var t=0;const r=scrollerProgress.style,s=scrollScreen.style,n=scrollerIcon.style;onTouchStart=(()=>{n.transition="",r.transition="",s.transition="all 1s ease 0s"}),onTouchMove=(e=>{t=e.touches[0].clientX;const a=(document.body.offsetWidth-588)/2;let o=0+t-a;o<=0?(r.width="0px",s.transform="translateX(0px)"):o>=588?(r.width="588px",s.transform="translateX(-2056px)"):o>0&&o<148?(n.transform=`translate(${o}px, -50%)`,r.width=o+"px"):o>148&&o<444?(n.transform=`translate(${o}px, -50%)`,r.width=o+"px",s.transform="translateX(-1028px)"):(n.transform=`translate(${o}px, -50%)`,r.width=o+"px"),o<148?s.transform="translateX(0px)":o>444&&(s.transform="translateX(-2056px)")}),onTouchEnd=(()=>{const e=(document.body.offsetWidth-588)/2;let a=0+t-e;n.transition="all 1s ease 0s",r.transition="all 1s ease 0s",a<=0?(n.transform="translate(0px, -50%)",r.width="0px",s.transform="translateX(0px)"):a>=588?(n.transform="translate(588px, -50%)",r.width="588px",s.transform="translateX(-2056px)"):a>0&&a<148?(n.transform="translate(0px, -50%)",r.width="0px",s.transform="translateX(0px)"):a>148&&a<444?(n.transform="translate(296px, -50%)",r.width="296px",s.transform="translateX(-1028px)"):(n.transform="translate(588px, -50%)",r.width="588px",s.transform="translateX(-2056px)")}),scrollerIcon.addEventListener("touchstart",onTouchStart,!1),scrollerIcon.addEventListener("touchmove",onTouchMove,!1),scrollerIcon.addEventListener("touchend",onTouchEnd,!1)},!1);