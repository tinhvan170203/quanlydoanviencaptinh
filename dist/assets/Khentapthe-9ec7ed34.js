import{r as g,j as e,d as L,m as he,k as ue,Q as v}from"./index-2b00a054.js";import{d as ge}from"./GridView-85d728d6.js";import{c as me}from"./chidoanApi-461c2452.js";import{d as A}from"./Search-c2bf7f37.js";import"./index.esm-a80e06b2.js";import{u as G,C as D}from"./index.esm-322da860.js";import{d as Y}from"./Add-84462153.js";import{d as xe}from"./Close-7c89c175.js";import{q as pe}from"./base-e8aaf39e.js";import{S as fe,D as be,a as ke,h as ye,d as je,b as Ne,c as Ce,f as ve,g as De,e as Se}from"./DialogDelete-f919c647.js";import{S}from"./react-select.esm-a86401bf.js";import{I as N,a as U,c as $,d,e as O,f as Te,P as Pe,h as Be,i as we,j as _e,k as Oe,u as Qe,l as V,m as W,n as F,o as I}from"./LastPage-e02fc572.js";import{B as T}from"./Button-c283a03a.js";import{s as qe}from"./ButtonBase-ca61bcf9.js";import{k as w}from"./khenthuongApi-b6cf2dbb.js";import{d as He}from"./dayjs.min-51d44ca9.js";import{D as $e}from"./DialogEditKhentapthe-67adabbc.js";import{C as Re,d as ze}from"./FileDownload-3a33c116.js";import"./createSvgIcon-46c59fe3.js";import"./Link-ed3a8026.js";const Ee=g.forwardRef(function(o,m){return e.jsx(fe,{direction:"up",ref:m,...o})}),Ke=qe(N)({position:"absolute",right:"16px",top:"4px"});function Me({open:s,onCloseDialogAdd:o,onSubmit:m,chidoans:i}){const{register:x,handleSubmit:r,control:p,resetField:f,setValue:C,watch:k,formState:{errors:u}}=G({defaultValues:{}});g.useState([]);const c=async b=>{if(m){const y={...b};await m(y),o(),f("soQD"),f("noidung")}};return e.jsx(e.Fragment,{children:e.jsxs(be,{maxWidth:"xl",fullWidth:!0,disableEscapeKeyDown:!0,onClose:(b,y)=>{y!=="backdropClick"&&o(b,y)},open:s,TransitionComponent:Ee,keepMounted:!0,"aria-describedby":"alert-dialog-slide-description",children:[e.jsxs(ke,{style:{display:"flex",borderBottom:"1px solid #ccc",backgroundColor:"rgb(30, 41, 59 )",margin:"0px"},children:[e.jsx(ye,{style:{color:"white",fontSize:"24px",marginRight:"8px"}}),e.jsx("span",{className:"text-white text-[18px]",children:"Thêm mới khen thưởng tập thể"}),e.jsx(Ke,{onClick:()=>o(),children:e.jsx(je,{style:{color:"white"}})})]}),e.jsx(Ne,{children:e.jsx(U,{children:e.jsx("form",{className:"mt-2 mx-8",onSubmit:r(c),children:e.jsxs("div",{className:"flex flex-wrap xl:flex-row flex-col flex-1 p-2",children:[e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Số QĐ khen thưởng: "]}),e.jsx("input",{...x("soQD",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Ngày ký: "]}),e.jsx("input",{...x("ngayky",{required:!0}),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Người ký: "]}),e.jsx("input",{...x("nguoiky",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-full flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Nội dung khen thưởng: "]}),e.jsx("input",{...x("noidung",{required:!0}),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/2 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"})," Hình thức khen: "]}),e.jsx(D,{control:p,name:"hinhthuc",render:({field:b})=>e.jsx(S,{options:[{label:"Giấy khen",value:"Giấy khen"},{label:"Bằng khen",value:"Bằng khen"},{label:"Cờ",value:"Cờ"},{label:"Huân chương",value:"Huân chương"},{label:"Huy chương",value:"Huy chương"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn hình thức",required:!0,...b})})]}),e.jsxs("div",{className:"flex-col md:basis-1/2 flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"}),"Cấp khen: "]}),e.jsx(D,{control:p,name:"capkhen",render:({field:b})=>e.jsx(S,{options:[{label:"Công an tỉnh",value:"Công an tỉnh"},{label:"UBND tỉnh",value:"UBND tỉnh"},{label:"Tỉnh đoàn",value:"Tỉnh đoàn"},{label:"Ban thanh niên Công an tỉnh",value:"Ban thanh niên Công an tỉnh"},{label:"Bộ Công an",value:"Bộ Công an"},{label:"Trung ương",value:"Trung ương"},{label:"Chính phủ",value:"Chính phủ"},{label:"Khác",value:"Khác"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn cấp khen",required:!0,...b})})]}),e.jsxs("div",{className:"flex-col md:basis-full flex flex-1 px-1",children:[e.jsxs("label",{className:"underline font-semibold",children:[e.jsx("span",{className:"text-red-600 font-semibold",children:" (*)"}),"Tập thể được khen thưởng: "]}),e.jsx(D,{control:p,name:"nhomchidoanduockhenthuong",render:({field:b})=>e.jsx(S,{isMulti:!0,options:i,className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn chi đoàn được khen",required:!0,...b})})]}),e.jsx(Ce,{children:e.jsxs(T,{color:"primary",variant:"contained",type:"submit",style:{margin:"4px auto"},children:[e.jsx(Y,{}),e.jsx("span",{children:"Thêm mới"})]})})]})})})})]})})}const Ae=({row:s,page:o,rowsPerPage:m,index:i,onClickOpenDialogEdit:x,onClickOpenDialogDelete:r})=>{g.useState(null);const p=L(f=>f.authReducer.roles_quanlydoanvien);return e.jsxs($,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(d,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:o*m+i}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:s.soQD})}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.hinhthuc}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.capkhen}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.nguoiky}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.nhomchidoanduockhenthuong.map(f=>e.jsxs("span",{children:[f.tenchidoan," ,"]},f._id))}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:He(s.ngayky).format("DD/MM/YYYY")}),e.jsx(d,{className:"border-r border-slate-300",align:"left",children:s.noidung}),e.jsxs(d,{align:"right",className:"bg-gray-300 flex justify-center items-center space-x-1 hover:bg-slate-500 transition duration-300",style:{width:"180px"},children:[p&&p.includes("sửa khen thưởng, kỉ luật")&&e.jsx(T,{variant:"contained",color:"info",size:"small",onClick:()=>x(s),children:e.jsx(ve,{style:{fontSize:"20px"}})}),p&&p.includes("xóa khen thưởng, kỉ luật")&&e.jsx(T,{variant:"contained",color:"error",size:"small",style:{marginLeft:"4px"},onClick:()=>r(s._id),children:e.jsx(De,{style:{fontSize:"20px"}})})]})]},s._id)};function X(s){const o=Qe(),{count:m,page:i,rowsPerPage:x,onPageChange:r}=s,p=u=>{r(u,0)},f=u=>{r(u,i-1)},C=u=>{r(u,i+1)},k=u=>{r(u,Math.max(0,Math.ceil(m/x)-1))};return e.jsxs(U,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(N,{onClick:p,disabled:i===0,"aria-label":"first page",children:o.direction==="rtl"?e.jsx(V,{}):e.jsx(W,{})}),e.jsx(N,{onClick:f,disabled:i===0,"aria-label":"previous page",children:o.direction==="rtl"?e.jsx(F,{}):e.jsx(I,{})}),e.jsx(N,{onClick:C,disabled:i>=Math.ceil(m/x)-1,"aria-label":"next page",children:o.direction==="rtl"?e.jsx(I,{}):e.jsx(F,{})}),e.jsx(N,{onClick:k,disabled:i>=Math.ceil(m/x)-1,"aria-label":"last page",children:o.direction==="rtl"?e.jsx(W,{}):e.jsx(V,{})})]})}X.propTypes={count:O.number.isRequired,onPageChange:O.func.isRequired,page:O.number.isRequired,rowsPerPage:O.number.isRequired};function Ve({list:s,onClickOpenDialogEdit:o,onClickOpenDialogDelete:m}){const[i,x]=g.useState(0),[r,p]=g.useState(10),f=i>0?Math.max(0,(1+i)*r-s.length):0,C=(u,c)=>{x(c)},k=u=>{p(parseInt(u.target.value,10)),x(0)};return e.jsxs(e.Fragment,{children:[e.jsx(Te,{component:Pe,children:e.jsxs(Be,{"aria-label":"custom pagination table",children:[e.jsx(we,{children:e.jsxs($,{children:[e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Số quyết định"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Hình thức"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Cấp khen"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Người ký"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Tập thể được khen"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày ký"}),e.jsx(d,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Nội dung khen"}),e.jsx(d,{align:"center",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )",maxWidth:"150px"},children:"Thao tác"})]})}),e.jsxs(_e,{children:[(r>0?s.slice(i*r,i*r+r):s).map((u,c)=>e.jsx(Ae,{row:u,page:i,rowsPerPage:r,index:c+1,onClickOpenDialogEdit:o,onClickOpenDialogDelete:m},u._id)),f>0&&e.jsx($,{style:{height:53*f},children:e.jsx(d,{colSpan:6})})]})]})}),e.jsx("div",{children:e.jsx(Oe,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:s.length,rowsPerPage:r,page:i,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:C,onRowsPerPageChange:k,ActionsComponent:X,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:c,to:b,count:y}){return`hiển thị ${c} đến ${b} bản ghi trong tổng số ${y!==-1?y:`more than ${b}`} bản ghi`}})})]})}let We=[{label:"STT",key:"stt"},{label:"Số quyết định",key:"soQD"},{label:"Hình thức",key:"hinhthuc"},{label:"Cấp khen",key:"capkhen"},{label:"Người ký",key:"nguoiky"},{label:"Tập thể được khen",key:"nhomchidoanduockhenthuong"},{label:"Ngày ký",key:"ngayky"},{label:"Nội dung khen",key:"noidung"}];const xn=()=>{const[s,o]=g.useState([]),[m,i]=g.useState([]),[x,r]=g.useState(!1),[p,f]=g.useState([]);let[C,k]=g.useState([]);const[u,c]=he();let[b,y]=ue();const[R,z]=g.useState({status:!1}),J=n=>{z({status:!0})},Z=()=>{z({...R,status:!1})},[Q,E]=g.useState({status:!1,item:null}),[j,P]=g.useState({status:!1,id_Delete:null}),ee=n=>{E({item:n,status:!0})},ne=()=>{E({...Q,status:!1})},ae=()=>{P({...j,status:!1})},se=()=>{P({...j,status:!1})},le=n=>{P({status:!0,id_Delete:n})};g.useEffect(()=>{(async()=>{try{let t=await me.getChidoanOfUser();i(t.data.map(a=>({label:a.tenchidoan,value:a._id}))),f([{label:"Tất cả",value:""}].concat(t.data.map(a=>({value:a._id,label:a.tenchidoan}))))}catch(t){console.log(t.message)}})()},[]);const{register:B,handleSubmit:te,control:q,resetField:Fe,setValue:Ie,watch:K,formState:{errors:Le}}=G({defaultValues:{hinhthuc:{label:"Tất cả",value:""},capkhen:{label:"Tất cả",value:""},nhomchidoanduockhenthuong:{label:"Tất cả",value:""}}}),oe=n=>{y({..._,...n,capkhen:n.capkhen.value,hinhthuc:n.hinhthuc.value,nhomchidoanduockhenthuong:n.nhomchidoanduockhenthuong.value})},_=g.useMemo(()=>{const n=pe.parse(location.search);return{...n,soQD:n.soQD||"",ngayky:n.ngayky||"",nguoiky:n.nguoiky||"",noidung:n.noidung||"",hinhthuc:n.hinhthuc||"",capkhen:n.capkhen||"",tungay:n.tungay||"",denngay:n.denngay||"",nhomchidoanduockhenthuong:n.nhomchidoanduockhenthuong||""}},[location.search]);g.useEffect(()=>{(async()=>{try{c(!0);let t=await w.getKhentapthes(_);o(t.data),k(t.data.map((a,l)=>({stt:l+1,soQD:a.soQD,ngayky:a.ngayky,noidung:a.noidung,nguoiky:a.nguoiky,hinhthuc:a.hinhthuc,capkhen:a.capkhen,nhomchidoanduockhenthuong:a.nhomchidoanduockhenthuong.map(h=>h.tenchidoan).toString()}))),setTimeout(()=>{c(!1)},400)}catch(t){console.log(t.message)}})()},[_]);const ie=async n=>{try{c(!0),await w.addKhentapthe(n);let t=await w.getKhentapthes(_);o(t.data),k(t.data.map((a,l)=>({stt:l+1,soQD:a.soQD,ngayky:a.ngayky,noidung:a.noidung,hinhthuc:a.hinhthuc,nguoiky:a.nguoiky,capkhen:a.capkhen,nhomchidoanduockhenthuong:a.nhomchidoanduockhenthuong.map(h=>h.tenchidoan).toString()}))),c(!1),v.success(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(t){v.error(t.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),c(!1)}},re=async()=>{c(!0);try{let n=await w.deleteKhentapthe(j.id_Delete),a=[...s].filter(l=>l._id.toString()!==j.id_Delete);o(a),k(a.map((l,h)=>({stt:h+1,soQD:l.soQD,ngayky:l.ngayky,nguoiky:l.nguoiky,noidung:l.noidung,hinhthuc:l.hinhthuc,capkhen:l.capkhen,nhomchidoanduockhenthuong:l.nhomchidoanduockhenthuong.map(H=>H.tenchidoan).toString()}))),setTimeout(()=>{c(!1)},400),P({...j,status:!1}),v.success(n.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(n){P({...j,status:!1}),v.error(n.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),c(!1)}},ce=async n=>{try{c(!0);let t=await w.editKhentapthe(n),a=[...s],l=s.findIndex(h=>h._id.toString()===n.id_edit);a[l].soQD=n.soQD,a[l].ngayky=n.ngayky,a[l].hinhthuc=n.hinhthuc.value,a[l].capkhen=n.capkhen.value,a[l].nguoiky=n.nguoiky,a[l].noidung=n.noidung,a[l].nhomchidoanduockhenthuong=n.nhomchidoanduockhenthuong.map(h=>({_id:h.value,tenchidoan:h.label})),o(a),k(a.map((h,H)=>({stt:H+1,soQD:h.soQD,ngayky:h.ngayky,noidung:h.noidung,hinhthuc:h.hinhthuc,nguoiky:h.nguoiky,capkhen:h.capkhen,nhomchidoanduockhenthuong:h.nhomchidoanduockhenthuong.map(de=>de.tenchidoan).toString()}))),c(!1),v.success(t.data.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"})}catch(t){v.error(t.message,{position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light"}),c(!1)}},M=L(n=>n.authReducer.roles_quanlydoanvien);return e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(ge,{color:"primary",fontSize:"large"}),e.jsx("h4",{className:"font-bold text-gray-800 text-lg",children:"Quản lý khen thưởng đối với tập thể chi đoàn, liên chi đoàn"})]}),e.jsxs("div",{className:"mt-4 text-end md:space-x-2 space-y-2 md:space-y-0 md:block flex flex-col items-center",children:[M&&M.includes("thêm khen thưởng, kỉ luật")&&e.jsxs(T,{type:"submit",sx:{width:"350px",backgroundColor:"gray"},onClick:()=>J(),color:"primary",variant:"contained",children:[e.jsx(Y,{})," Thêm mới khen thưởng tập thể"]}),e.jsxs(T,{sx:{width:"300px",backgroundColor:"darkgray"},onClick:()=>r(!0),color:"info",variant:"contained",children:[e.jsx(A,{})," Chức năng tìm kiếm nâng cao"]}),e.jsx(N,{children:e.jsx(Re,{data:C,headers:We,filename:`danhsachkhentapthe_${K("tungay")}_${K("denngay")}`,children:e.jsxs("div",{className:"flex items-center shadow-md space-x-2 bg-green-300 px-2 py-1 rounded-md",children:[e.jsx(ze,{}),e.jsx("span",{className:"text-sm text-green-800",children:"Xuất file excel"})]})})})]}),x&&e.jsxs("form",{onSubmit:te(oe),className:"my-2 mt-4 mx-8 bg-slate-100 p-4 rounded-lg shadow-xl","data-aos":"zoom-in-down","data-aos-once":"true",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("h5",{className:"text-[18px] font-semibold",children:"Tìm kiếm nâng cao"}),e.jsx(N,{onClick:()=>r(!1),sx:{backgroundColor:"#333"},children:e.jsx(xe,{sx:{color:"white"}})})]}),e.jsxs("div",{className:"flex flex-wrap xl:flex-row flex-col flex-1 p-2",children:[e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Số QĐ khen thưởng: "}),e.jsx("input",{...B("soQD"),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                    focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/6 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Từ ngày: "}),e.jsx("input",{...B("tungay"),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/6 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Đến ngày: "}),e.jsx("input",{...B("denngay"),type:"date",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Người ký: "}),e.jsx("input",{...B("nguoiky"),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-full flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Nội dung khen thưởng: "}),e.jsx("input",{...B("noidung"),type:"text",className:`outline-none my-4 border rounded-md p-2 border-neutral-600\r
                  focus:ring-2 focus:border-blue-400`})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Hình thức khen: "}),e.jsx(D,{control:q,name:"hinhthuc",render:({field:n})=>e.jsx(S,{options:[{label:"Tất cả",value:""},{label:"Giấy khen",value:"Giấy khen"},{label:"Bằng khen",value:"Bằng khen"},{label:"Cờ",value:"Cờ"},{label:"Huân chương",value:"Huân chương"},{label:"Huy chương",value:"Huy chương"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn hình thức",...n})})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Cấp khen: "}),e.jsx(D,{control:q,name:"capkhen",render:({field:n})=>e.jsx(S,{options:[{label:"Tất cả",value:""},{label:"Công an tỉnh",value:"Công an tỉnh"},{label:"Tỉnh đoàn",value:"Tỉnh đoàn"},{label:"Ban thanh niên Công an tỉnh",value:"Ban thanh niên Công an tỉnh"},{label:"Bộ Công an",value:"Bộ Công an"},{label:"Trung ương",value:"Trung ương"},{label:"Chính phủ",value:"Chính phủ"},{label:"Khác",value:"Khác"}],className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Vui lòng chọn cấp khen",...n})})]}),e.jsxs("div",{className:"flex-col md:basis-1/3 flex flex-1 px-1",children:[e.jsx("label",{className:"underline font-semibold",children:"Tập thể được khen thưởng: "}),e.jsx(D,{control:q,name:"nhomchidoanduockhenthuong",render:({field:n})=>e.jsx(S,{options:p,className:"basic-multi-select my-4 p-1",classNamePrefix:"select",placeholder:"Tất cả",...n})})]})]}),e.jsx("div",{className:"my-2 text-center",children:e.jsxs(T,{sx:{width:"200px",backgroundColor:"slategray"},type:"submit",color:"info",variant:"contained",children:[e.jsx(A,{})," Tìm kiếm"]})})]}),e.jsxs("div",{className:"mt-6 mx-8",children:[e.jsx("h3",{className:"text-center my-4 text-xl",children:"Danh sách kết quả khen thưởng đối với tập thể"}),e.jsx(Ve,{list:s,onClickOpenDialogDelete:le,onClickOpenDialogEdit:ee})]}),e.jsx(Me,{open:R.status,onSubmit:ie,onCloseDialogAdd:Z,chidoans:m}),e.jsx($e,{open:Q.status,item:Q.item,onSubmit:ce,onCloseDialogEdit:ne,chidoans:m}),e.jsx(Se,{open:j.status,onCloseDialogDelete:se,onConfirmDelete:re,onCancelDelete:ae})]})};export{xn as default};