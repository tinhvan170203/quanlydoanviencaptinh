import{r as d,j as s,u as A,A as w,l as G,a as I,Q as S,b as P}from"./index-2b00a054.js";import{u as O}from"./useDispatch-11f9eb28.js";import{g as B,a as L,k as H,s as N,c as p,_ as u,b as M,u as U,d as E,e as V,f as q}from"./ButtonBase-ca61bcf9.js";import{B as z}from"./Button-c283a03a.js";function F(e){return B("MuiCircularProgress",e)}L("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);const K=["className","color","disableShrink","size","style","thickness","value","variant"];let x=e=>e,$,D,R,_;const o=44,Q=H($||($=x`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)),W=H(D||(D=x`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)),Y=e=>{const{classes:r,variant:t,color:n,disableShrink:c}=e,h={root:["root",t,`color${p(n)}`],svg:["svg"],circle:["circle",`circle${p(t)}`,c&&"circleDisableShrink"]};return q(h,F,r)},Z=N("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],r[`color${p(t.color)}`]]}})(({ownerState:e,theme:r})=>u({display:"inline-block"},e.variant==="determinate"&&{transition:r.transitions.create("transform")},e.color!=="inherit"&&{color:(r.vars||r).palette[e.color].main}),({ownerState:e})=>e.variant==="indeterminate"&&M(R||(R=x`
      animation: ${0} 1.4s linear infinite;
    `),Q)),J=N("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,r)=>r.svg})({display:"block"}),X=N("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.circle,r[`circle${p(t.variant)}`],t.disableShrink&&r.circleDisableShrink]}})(({ownerState:e,theme:r})=>u({stroke:"currentColor"},e.variant==="determinate"&&{transition:r.transitions.create("stroke-dashoffset")},e.variant==="indeterminate"&&{strokeDasharray:"80px, 200px",strokeDashoffset:0}),({ownerState:e})=>e.variant==="indeterminate"&&!e.disableShrink&&M(_||(_=x`
      animation: ${0} 1.4s ease-in-out infinite;
    `),W)),ee=d.forwardRef(function(r,t){const n=U({props:r,name:"MuiCircularProgress"}),{className:c,color:h="primary",disableShrink:f=!1,size:l=40,style:v,thickness:a=3.6,value:i=0,variant:m="indeterminate"}=n,T=E(n,K),g=u({},n,{color:h,disableShrink:f,size:l,thickness:a,value:i,variant:m}),y=Y(g),k={},b={},C={};if(m==="determinate"){const j=2*Math.PI*((o-a)/2);k.strokeDasharray=j.toFixed(3),C["aria-valuenow"]=Math.round(i),k.strokeDashoffset=`${((100-i)/100*j).toFixed(3)}px`,b.transform="rotate(-90deg)"}return s.jsx(Z,u({className:V(y.root,c),style:u({width:l,height:l},b,v),ownerState:g,ref:t,role:"progressbar"},C,T,{children:s.jsx(J,{className:y.svg,ownerState:g,viewBox:`${o/2} ${o/2} ${o} ${o}`,children:s.jsx(X,{className:y.circle,style:k,ownerState:g,cx:o,cy:o,r:(o-a)/2,fill:"none",strokeWidth:a})})}))}),re=ee;function ne(){const[e,r]=d.useState(""),[t,n]=d.useState(""),[c,h]=d.useState(!1),f=A(),l=O();d.useEffect(()=>{w.init(),w.refresh()},[]);const v=async()=>{const a=G({tentaikhoan:e,matkhau:t});try{const i=await l(a),m=I(i);S.success("Đăng nhập thành công",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),P.remove("refreshToken_quanlydoanvien"),P.set("refreshToken_quanlydoanvien",m.refreshToken,{expires:7,secure:!0}),f("/dashboard/bao-cao/thi-dua-thang")}catch(i){S.error(i.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}};return s.jsx("div",{className:"flex items-center min-h-screen justify-center bg-center bg-cover",style:{backgroundImage:"url('/anhnen.png')"},children:s.jsxs("form",{className:"p-8 shadow-xl  rounded-lg  border border-white bg-black bg-opacity-80","data-aos":"fade-right",children:[s.jsxs("div",{className:"flex items-center justify-center space-x-2 mb-2",children:[s.jsx("img",{src:"/conganhieu.png",alt:"logo",className:"w-[100px]"}),s.jsx("img",{src:"/huyhieudoan.png",alt:"logo",className:"w-[80px]"})]}),s.jsx("h3",{className:"font-bold text-center text-white",style:{textShadow:"2px 2px 1px #333"},children:"CÔNG AN TỈNH HƯNG YÊN - CÔNG TRÌNH THANH NIÊN"}),s.jsx("h3",{className:"font-bold text-center text-white",style:{textShadow:"2px 2px 1px #333"},children:"QUẢN LÝ ĐOÀN VIÊN TRONG LỰC LƯỢNG CÔNG AN NHÂN DÂN"}),s.jsx("hr",{}),s.jsx("div",{className:"flex flex-col my-2 mt-8",children:s.jsx("input",{defaultValue:e,type:"text",placeholder:"Tài khoản...",className:`w-full outline-none my-2 p-2 rounded-md \r
                     bg-black bg-opacity-40 text-white`,onChange:a=>r(a.target.value)})}),s.jsx("div",{className:"flex flex-col my-2 mb-4",children:s.jsx("input",{defaultValue:t,type:"password",placeholder:"Mật khẩu...",className:`w-full outline-none my-2 p-2 rounded-md\r
                   bg-black bg-opacity-40 text-white`,onChange:a=>n(a.target.value)})}),c&&s.jsx("div",{className:"text-center",children:s.jsx(re,{})}),s.jsx(z,{variant:"contained",className:"w-full",color:"primary",onClick:v,disabled:c,children:"Đăng nhập"}),s.jsx("p",{className:"text-sm text-center mt-4 text-white",children:"Ứng dụng chuyển đổi số trong công tác công an tại công an cấp tỉnh"}),s.jsx("p",{className:"text-sm text-center underline underline-offset-4 text-white",children:"Bản quyền thuộc về Công an tỉnh Hưng Yên"})]})})}export{ne as default};
