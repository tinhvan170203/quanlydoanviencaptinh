import{r as c,d as H,j as e,u as O,m as W,Q as I}from"./index-2b00a054.js";import{d as V}from"./GridView-85d728d6.js";import{c as Q}from"./chidoanApi-461c2452.js";import"./index.esm-a80e06b2.js";import{u as U,C as X}from"./index.esm-322da860.js";import{C as G,d as J}from"./FileDownload-3a33c116.js";import{d as K}from"./Add-84462153.js";import{S as Z}from"./react-select.esm-a86401bf.js";import{c as ee}from"./canboApi-c8a721f9.js";import{d as b}from"./dayjs.min-51d44ca9.js";import{t as M}from"./thongkeApi-29f415fb.js";import"./TableChitietThiduathang-bb08c730.js";import"./TableBangthiduathang-0c308de5.js";import{e as v,f as ae,P as ne,h as te,i as se,c as _,d,j as oe,k as re,u as le,a as ie,I as C,l as B,m as D,n as $,o as R}from"./LastPage-e02fc572.js";import{B as N}from"./Button-c283a03a.js";import"./createSvgIcon-46c59fe3.js";import"./ButtonBase-ca61bcf9.js";import"./Link-ed3a8026.js";import"./Flag-21a3ac5b.js";import"./Tooltip-608b47d3.js";function z(g){O();const u=le(),{count:s,page:l,rowsPerPage:o,onPageChange:i}=g,f=t=>{i(t,0)},p=t=>{i(t,l-1)},x=t=>{i(t,l+1)},n=t=>{i(t,Math.max(0,Math.ceil(s/o)-1))};return e.jsxs(ie,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(C,{onClick:f,disabled:l===0,"aria-label":"first page",children:u.direction==="rtl"?e.jsx(B,{}):e.jsx(D,{})}),e.jsx(C,{onClick:p,disabled:l===0,"aria-label":"previous page",children:u.direction==="rtl"?e.jsx($,{}):e.jsx(R,{})}),e.jsx(C,{onClick:x,disabled:l>=Math.ceil(s/o)-1,"aria-label":"next page",children:u.direction==="rtl"?e.jsx(R,{}):e.jsx($,{})}),e.jsx(C,{onClick:n,disabled:l>=Math.ceil(s/o)-1,"aria-label":"last page",children:u.direction==="rtl"?e.jsx(D,{}):e.jsx(B,{})})]})}z.propTypes={count:v.number.isRequired,onPageChange:v.func.isRequired,page:v.number.isRequired,rowsPerPage:v.number.isRequired};function de({list:g,onChangeStatus:u}){const[s,l]=c.useState(0),[o,i]=c.useState(10);s>0&&Math.max(0,(1+s)*o-g.length);const f=(n,t)=>{l(t)},p=n=>{i(parseInt(n.target.value,10)),l(0)},x=H(n=>n.authReducer.roles_quanlydoanvien);return e.jsxs(e.Fragment,{children:[e.jsx(ae,{component:ne,children:e.jsxs(te,{"aria-label":"custom pagination table",children:[e.jsx(se,{children:e.jsxs(_,{children:[e.jsx(d,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(d,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Họ tên"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày trưởng thành đoàn"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Đơn vị"}),e.jsx(d,{align:"right",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Chi tiết"})]})}),e.jsx(oe,{children:(o>0?g.slice(s*o,s*o+o):g).map((n,t)=>e.jsxs(_,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(d,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:s*o+t+1}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:n.hoten})}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:b(n.ngaytruongthanhdoan).format("DD/MM/YYYY")}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:n.donvi.donvi.tendonvi}),e.jsxs(d,{className:"border-r border-slate-300",align:"right",children:[x.includes("thay-doi-truong-thanh-doan")&&e.jsx(N,{variant:"contained",color:"info",size:"small",onClick:()=>u(n._id),children:"Thay đổi trạng thái trưởng thành đoàn"}),e.jsx(N,{variant:"contained",color:"info",size:"small",style:{marginLeft:"12px"},onClick:()=>window.open(`/dashboard/thong-tin-doan-vien/${n._id}`,"_blank","noreferrer"),children:"Trang cá nhân"})]})]},n._id))})]})}),e.jsx("div",{children:e.jsx(re,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:g.length,rowsPerPage:o,page:s,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:f,onRowsPerPageChange:p,ActionsComponent:z,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:t,to:j,count:y}){return`hiển thị ${t} đến ${j} bản ghi trong tổng số ${y!==-1?y:`more than ${j}`} bản ghi`}})})]})}let ce=[{label:"STT",key:"stt"},{label:"Họ tên",key:"hoten"},{label:"Ngày trưởng thành đoàn",key:"ngaytruongthanhdoan"},{label:"Đơn vị",key:"donvi"}];const De=()=>{const[g,u]=c.useState(""),[s,l]=c.useState(""),[o,i]=W(),[f,p]=c.useState([]),[x,n]=c.useState({label:"",value:""}),[t,j]=c.useState(!1),[y,P]=c.useState([]),[T,k]=c.useState([]),{register:S,handleSubmit:E,control:F,resetField:he,setValue:Y,watch:w,formState:{errors:ge}}=U({defaultValues:{chidoans:{label:"Tất cả",value:""},tungay:"",denngay:"",hoten:""}});c.useEffect(()=>{(async()=>{try{let a=await ee.fetchYearMonth(),r=await Q.getChidoanOfUser();p([{label:"Tất cả",value:""}].concat(r.data.map(m=>({value:m._id,label:m.tenchidoan})))),Y("tungay",a.data.year+"-01-01"),Y("denngay",a.data.year+"-"+a.data.month+"-15"),u(a.data.year+"-01-01"),l(a.data.year+"-"+a.data.month+"-15")}catch(a){console.log(a.message)}})()},[]);const L=async h=>{let a={...h,chidoans:h.chidoans.value};try{i(!0);let r=await M.getTruongthanhdoans(a);k(r.data),n(h.chidoans),P(r.data.map((m,A)=>({stt:A+1,hoten:m.hoten,ngaytruongthanhdoan:b(m.ngaytruongthanhdoan).format("DD/MM/YYYY"),donvi:m.donvi.donvi.tendonvi}))),i(!1),j(!0)}catch(r){console.log(r.message)}},q=async h=>{i(!0);try{await M.changeStatusTruongthanhdoan(h);let a=[...T];a=a.filter(r=>r._id.toString()!==h),k(a),P(a.map((r,m)=>({stt:m+1,hoten:r.hoten,ngaytruongthanhdoan:b(r.ngaytruongthanhdoan).format("DD/MM/YYYY"),donvi:r.donvi.donvi.tendonvi}))),i(!1),I.success("Thay đổi trạng thái thành công",{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(a){console.log(a.message)}};return e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(V,{color:"primary",fontSize:"large"}),e.jsxs("h4",{className:"font-bold text-gray-800 text-lg",children:["Theo dõi, thống kê đoàn viên trưởng thành đoàn từ ngày ",b(g).format("DD/MM/YYYY")," đến ngày ",b(s).format("DD/MM/YYYY")," - chi đoàn, liên chi đoàn: ",x==null?void 0:x.label]})]}),e.jsx("form",{onSubmit:E(L),children:e.jsxs("div",{className:"flex mt-4 px-4 space-x-2 md:flex-row justify-end items-start",children:[e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Họ tên: "}),e.jsx("input",{...S("hoten"),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                    focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/6 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Từ ngày: "}),e.jsx("input",{...S("tungay"),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/6 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Đến ngày: "}),e.jsx("input",{...S("denngay"),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Chi đoàn, liên chi đoàn: "}),e.jsx(X,{control:F,name:"chidoans",render:({field:h})=>e.jsx(Z,{options:f,className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Tất cả",...h})})]}),e.jsx("div",{className:"flex-col flex md:basis-1/6",children:e.jsxs(N,{size:"small",type:"submit",sx:{width:"220px",backgroundColor:"gray"},color:"primary",variant:"contained",children:[e.jsx(K,{})," Lấy dữ liệu"]})})]})}),t&&e.jsxs("div",{className:"px-4","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx(N,{color:"info",variant:"contained",size:"small",children:e.jsx(G,{data:y,headers:ce,filename:`danhsachtruongthanhdoan_${w("tungay")}_${w("denngay")}`,children:e.jsxs("div",{className:"flex items-center",children:[e.jsx(J,{}),e.jsx("span",{className:"text-sm",children:"Xuất file excel"})]})})}),e.jsx("div",{className:"mt-4",children:e.jsx(de,{list:T,onChangeStatus:q})})]})]})};export{De as default};