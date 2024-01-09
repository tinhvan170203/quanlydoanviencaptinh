import{r as g,j as e,m as q,d as A,Q as _}from"./index-2b00a054.js";import{d as E}from"./GridView-85d728d6.js";import"./index.esm-a80e06b2.js";import{d as w}from"./Add-84462153.js";import{S as K}from"./react-select.esm-a86401bf.js";import"./Link-ed3a8026.js";import{c as T}from"./canboApi-c8a721f9.js";import{c as k,d,e as P,f as F,P as V,h as Q,i as G,j as X,k as J,u as U,a as Z,I as N,l as B,m as R,n as W,o as $}from"./LastPage-e02fc572.js";import"./dayjs.min-51d44ca9.js";import{B as I}from"./Button-c283a03a.js";import"./createSvgIcon-46c59fe3.js";import"./ButtonBase-ca61bcf9.js";const ee=({row:a,page:h,rowsPerPage:f,index:c,onHandleChangeItem:s,onHandleChangeText:m})=>{const[u,b]=g.useState("null"),[C,p]=g.useState("");g.useEffect(()=>{a&&(b(a.thiduanam.result),p(a.thiduanam.ghichu))},[a]);const t=i=>{b(i.target.value),s(a,i.target.value)},x=i=>{p(i.target.value),m(a,i.target.value)};return e.jsxs(k,{children:[e.jsx(d,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:h*f+c}),e.jsx(d,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:a.hoten}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:a.bachamPopulate[0].bacham}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:e.jsx("p",{className:"truncate",children:a.donviPopulate[0].tendonvi})}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:e.jsxs("select",{className:"outline-none p-2 w-full",onChange:i=>t(i),value:u,children:[e.jsx("option",{value:"null",children:"Chưa phân loại"}),e.jsx("option",{value:"Không hoàn thành nhiệm vụ",children:"Không hoàn thành nhiệm vụ"}),e.jsx("option",{value:"Hoàn thành nhiệm vụ",children:"Hoàn thành nhiệm vụ"}),e.jsx("option",{value:"Hoàn thành tốt nhiệm vụ",children:"Hoàn thành tốt nhiệm vụ"}),e.jsx("option",{value:"Hoàn thành xuất sắc nhiệm vụ",children:"Hoàn thành xuất sắc nhiệm vụ"})]})}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:e.jsx("input",{type:"text",className:"w-full border p-2",value:C,onChange:i=>x(i)})})]},a._id)};function D(a){const h=U(),{count:f,page:c,rowsPerPage:s,onPageChange:m}=a,u=t=>{m(t,0)},b=t=>{m(t,c-1)},C=t=>{m(t,c+1)},p=t=>{m(t,Math.max(0,Math.ceil(f/s)-1))};return e.jsxs(Z,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(N,{onClick:u,disabled:c===0,"aria-label":"first page",children:h.direction==="rtl"?e.jsx(B,{}):e.jsx(R,{})}),e.jsx(N,{onClick:b,disabled:c===0,"aria-label":"previous page",children:h.direction==="rtl"?e.jsx(W,{}):e.jsx($,{})}),e.jsx(N,{onClick:C,disabled:c>=Math.ceil(f/s)-1,"aria-label":"next page",children:h.direction==="rtl"?e.jsx($,{}):e.jsx(W,{})}),e.jsx(N,{onClick:p,disabled:c>=Math.ceil(f/s)-1,"aria-label":"last page",children:h.direction==="rtl"?e.jsx(R,{}):e.jsx(B,{})})]})}D.propTypes={count:P.number.isRequired,onPageChange:P.func.isRequired,page:P.number.isRequired,rowsPerPage:P.number.isRequired};function ae({list:a,onHandleChangeAll:h,onHandleChangeItem:f,onHandleChangeText:c}){const[s,m]=g.useState(0),[u,b]=g.useState(10);s>0&&Math.max(0,(1+s)*u-a.length);const C=(t,x)=>{m(x)},p=t=>{b(parseInt(t.target.value,10)),m(0)};return e.jsxs(e.Fragment,{children:[e.jsx(F,{component:V,style:{overflowX:"scroll"},children:e.jsxs(Q,{"aria-label":"custom pagination table",children:[e.jsxs(G,{children:[e.jsxs(k,{children:[e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"250px"},children:"Họ tên"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"120px"},children:"Bậc hàm"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"300px"},children:"Đơn vị công tác"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"120px"},children:"Phân loại xếp loại đoàn viên"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",minWidth:"300px"},children:"Ghi chú"})]}),e.jsxs(k,{children:[e.jsx(d,{colSpan:4,className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"}}),e.jsx(d,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:e.jsxs("select",{onChange:t=>h(t.target.value),className:"outline-none p-2 w-full",defaultValue:"null",children:[e.jsx("option",{value:"null",children:"Chưa phân loại"}),e.jsx("option",{value:"Không hoàn thành nhiệm vụ",children:"Không hoàn thành nhiệm vụ"}),e.jsx("option",{value:"Hoàn thành nhiệm vụ",children:"Hoàn thành nhiệm vụ"}),e.jsx("option",{value:"Hoàn thành tốt nhiệm vụ",children:"Hoàn thành tốt nhiệm vụ"}),e.jsx("option",{value:"Hoàn thành xuất sắc nhiệm vụ",children:"Hoàn thành xuất sắc nhiệm vụ"})]})}),e.jsx(d,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"}})]})]}),e.jsx(X,{children:(u>0?a.slice(s*u,s*u+u):a).map((t,x)=>e.jsx(ee,{row:t,page:s,rowsPerPage:u,index:x+1,onHandleChangeItem:f,onHandleChangeText:c},t._id))})]})}),e.jsx("div",{children:e.jsx(J,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:a.length,rowsPerPage:u,page:s,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:C,onRowsPerPageChange:p,ActionsComponent:D,labelRowsPerPage:"Số cán bộ hiển thị trên mỗi trang",labelDisplayedRows:function({from:x,to:i,count:S}){return`hiển thị ${x} đến ${i} cán bộ trong tổng số ${S!==-1?S:`more than ${i}`} cán bộ`}})})]})}const ge=()=>{const[a,h]=g.useState([]),[f,c]=g.useState(1),[s,m]=g.useState(2022),[u,b]=g.useState([]),[C,p]=q(),[t,x]=g.useState([]),[i,S]=g.useState("");g.useEffect(()=>{(async()=>{try{let l=await T.fetchYearMonth();m(l.data.year),c(l.data.year);let r=[];for(let o=l.data.year;o>=2020;o--)r.push({label:o,value:o});b(r)}catch(l){console.log(l.message)}})()},[]);const z=async()=>{try{p(!0);let n=await T.fetchThiduanam({year:s});c(s),x(n.data),h(n.data),p(!1)}catch(n){console.log(n.message)}};g.useEffect(()=>{const n=setTimeout(()=>{let r=[...a].filter(o=>o.hoten.toLowerCase().includes(i.toLowerCase()));x(r)},500);return()=>clearTimeout(n)},[i]);const L=n=>{let l=[...t];l=l.map(o=>({...o,thiduanam:{ghichu:o.thiduanam.ghichu,result:n}})),x(l);let r=[...a];for(let o of l){let j=r.findIndex(y=>y._id.toString()===o._id.toString());r[j].thiduanam.result=o.thiduanam.result}h(r)},M=(n,l)=>{let r=[...t],o=r.findIndex(v=>v._id.toString()===n._id.toString());r[o].thiduanam.result=l;let j=[...a],y=r.findIndex(v=>v._id.toString()===n._id.toString());j[y].thiduanam.result=l,h(j),x(r)},O=(n,l)=>{let r=[...t],o=r.findIndex(v=>v._id.toString()===n._id.toString());r[o].thiduanam.ghichu=l,x(r);let j=[...a],y=j.findIndex(v=>v._id.toString()===n._id.toString());j[y].thiduanam.ghichu=l,h(j)},Y=async()=>{let n={doanviens:a,year:f};try{p(!0);let l=await T.updateThiduanam(n);_.success(l.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),p(!1)}catch(l){_.error(l.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),p(!1)}},H=A(n=>n.authReducer.roles_quanlydoanvien);return e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(E,{color:"primary",fontSize:"large"}),e.jsxs("h4",{className:"font-bold text-gray-800 text-lg",children:["Quản lý xếp loại đoàn viên năm ",f]})]}),e.jsxs("div",{className:"flex space-x-2 md:flex-row justify-end items-start",children:[e.jsxs("div",{className:"flex-col flex md:basis-1/6",children:[e.jsx("label",{className:"underline font-semibold",children:"Năm:"}),e.jsx(K,{value:{label:s,value:s},required:!0,name:"nam",options:u,className:"basic-multi-select my-4",classNamePrefix:"select",onChange:n=>m(n.value)})]}),e.jsx("div",{className:"flex-col flex md:basis-1/6",children:e.jsxs(I,{onClick:()=>z(),sx:{width:"220px",backgroundColor:"gray"},color:"primary",variant:"contained",children:[e.jsx(w,{})," Lấy dữ liệu"]})})]}),e.jsxs("div",{className:"mx-8 flex space-x-2 items-center",children:[e.jsx("input",{type:"text",defaultValue:i,onChange:n=>S(n.target.value),placeholder:"Search họ tên",className:"p-2 border rounded-md"}),H&&H.includes("thêm thi đua")&&e.jsxs(I,{onClick:()=>Y(),sx:{width:"220px",backgroundColor:"gray"},color:"primary",variant:"contained",children:[e.jsx(w,{})," Lưu dữ liệu"]})]}),e.jsx("div",{className:"mt-6 mx-8",children:e.jsx(ae,{list:t,onHandleChangeItem:M,onHandleChangeAll:L,onHandleChangeText:O})})]})};export{ge as default};