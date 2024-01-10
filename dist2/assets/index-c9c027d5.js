import{r as p,j as e,m as Y,v,d as A}from"./index-2b00a054.js";import{d as L}from"./GridView-85d728d6.js";import{e as x,f as k,P as S,h as w,i as R,c as u,d as a,j as T,k as D,u as W,a as M,I as b,l as j,m as y,n as N,o as P}from"./LastPage-e02fc572.js";import{d as C}from"./dayjs.min-51d44ca9.js";import{d as _}from"./Flag-21a3ac5b.js";import{T as $}from"./Tooltip-608b47d3.js";import{c as F}from"./canboApi-c8a721f9.js";import"./createSvgIcon-46c59fe3.js";import"./ButtonBase-ca61bcf9.js";function q(c){const l=W(),{count:r,page:s,rowsPerPage:h,onPageChange:o}=c,g=t=>{o(t,0)},d=t=>{o(t,s-1)},n=t=>{o(t,s+1)},i=t=>{o(t,Math.max(0,Math.ceil(r/h)-1))};return e.jsxs(M,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(b,{onClick:g,disabled:s===0,"aria-label":"first page",children:l.direction==="rtl"?e.jsx(j,{}):e.jsx(y,{})}),e.jsx(b,{onClick:d,disabled:s===0,"aria-label":"previous page",children:l.direction==="rtl"?e.jsx(N,{}):e.jsx(P,{})}),e.jsx(b,{onClick:n,disabled:s>=Math.ceil(r/h)-1,"aria-label":"next page",children:l.direction==="rtl"?e.jsx(P,{}):e.jsx(N,{})}),e.jsx(b,{onClick:i,disabled:s>=Math.ceil(r/h)-1,"aria-label":"last page",children:l.direction==="rtl"?e.jsx(y,{}):e.jsx(j,{})})]})}q.propTypes={count:x.number.isRequired,onPageChange:x.func.isRequired,page:x.number.isRequired,rowsPerPage:x.number.isRequired};function I({list:c}){const[l,r]=p.useState(0),[s,h]=p.useState(10),o=l>0?Math.max(0,(1+l)*s-c.length):0,g=(n,i)=>{r(i)},d=n=>{h(parseInt(n.target.value,10)),r(0)};return e.jsxs(e.Fragment,{children:[e.jsx(k,{component:S,children:e.jsxs(w,{"aria-label":"custom pagination table",children:[e.jsx(R,{children:e.jsxs(u,{children:[e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Số quyết định"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Hình thức"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Cấp khen"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Người ký"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày ký"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Nội dung khen"})]})}),e.jsxs(T,{children:[(s>0?c.slice(l*s,l*s+s):c).map((n,i)=>e.jsxs(u,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(a,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:l*s+i+1}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:n.soQD})}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:n.hinhthuc}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:n.capkhen}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:n.nguoiky}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:C(n.ngayky).format("DD/MM/YYYY")}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:n.noidung})]},n._id)),o>0&&e.jsx(u,{style:{height:53*o},children:e.jsx(a,{colSpan:6})})]})]})}),e.jsx("div",{children:e.jsx(D,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:c.length,rowsPerPage:s,page:l,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:g,onRowsPerPageChange:d,ActionsComponent:q,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:i,to:t,count:m}){return`hiển thị ${i} đến ${t} bản ghi trong tổng số ${m!==-1?m:`more than ${t}`} bản ghi`}})})]})}function B(c){const l=W(),{count:r,page:s,rowsPerPage:h,onPageChange:o}=c,g=t=>{o(t,0)},d=t=>{o(t,s-1)},n=t=>{o(t,s+1)},i=t=>{o(t,Math.max(0,Math.ceil(r/h)-1))};return e.jsxs(M,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(b,{onClick:g,disabled:s===0,"aria-label":"first page",children:l.direction==="rtl"?e.jsx(j,{}):e.jsx(y,{})}),e.jsx(b,{onClick:d,disabled:s===0,"aria-label":"previous page",children:l.direction==="rtl"?e.jsx(N,{}):e.jsx(P,{})}),e.jsx(b,{onClick:n,disabled:s>=Math.ceil(r/h)-1,"aria-label":"next page",children:l.direction==="rtl"?e.jsx(P,{}):e.jsx(N,{})}),e.jsx(b,{onClick:i,disabled:s>=Math.ceil(r/h)-1,"aria-label":"last page",children:l.direction==="rtl"?e.jsx(y,{}):e.jsx(j,{})})]})}B.propTypes={count:x.number.isRequired,onPageChange:x.func.isRequired,page:x.number.isRequired,rowsPerPage:x.number.isRequired};function K({list:c}){const[l,r]=p.useState(0),[s,h]=p.useState(10),o=l>0?Math.max(0,(1+l)*s-c.length):0,g=(n,i)=>{r(i)},d=n=>{h(parseInt(n.target.value,10)),r(0)};return e.jsxs(e.Fragment,{children:[e.jsx(k,{component:S,children:e.jsxs(w,{"aria-label":"custom pagination table",children:[e.jsx(R,{children:e.jsxs(u,{children:[e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"#"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Số quyết định"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Hình thức"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Người ký"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Ngày ký"}),e.jsx(a,{align:"left",style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"200px",backgroundColor:"rgb(30, 41, 59 )"},children:"Nội dung kỉ luật"})]})}),e.jsxs(T,{children:[(s>0?c.slice(l*s,l*s+s):c).map((n,i)=>e.jsxs(u,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(a,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:l*s+i+1}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:e.jsx("span",{className:"font-bold",children:n.soQD})}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:n.hinhthuc}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:n.nguoiky}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:C(n.ngayky).format("DD/MM/YYYY")}),e.jsx(a,{className:"border-r border-slate-300",align:"left",children:n.noidung})]},n._id)),o>0&&e.jsx(u,{style:{height:53*o},children:e.jsx(a,{colSpan:6})})]})]})}),e.jsx("div",{children:e.jsx(D,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:c.length,rowsPerPage:s,page:l,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:g,onRowsPerPageChange:d,ActionsComponent:B,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:i,to:t,count:m}){return`hiển thị ${i} đến ${t} bản ghi trong tổng số ${m!==-1?m:`more than ${t}`} bản ghi`}})})]})}const H=c=>c.map((l,r)=>e.jsx(a,{className:"border-r border-slate-300",align:"center",children:l[`thang${r+1}`].result==="null"?"":e.jsx($,{title:l[`thang${r+1}`].ghichu,children:e.jsx(_,{sx:{color:l[`thang${r+1}`].result}})})},r));function z(c){const l=W(),{count:r,page:s,rowsPerPage:h,onPageChange:o}=c,g=t=>{o(t,0)},d=t=>{o(t,s-1)},n=t=>{o(t,s+1)},i=t=>{o(t,Math.max(0,Math.ceil(r/h)-1))};return e.jsxs(M,{sx:{flexShrink:0,ml:2.5},children:[e.jsx(b,{onClick:g,disabled:s===0,"aria-label":"first page",children:l.direction==="rtl"?e.jsx(j,{}):e.jsx(y,{})}),e.jsx(b,{onClick:d,disabled:s===0,"aria-label":"previous page",children:l.direction==="rtl"?e.jsx(N,{}):e.jsx(P,{})}),e.jsx(b,{onClick:n,disabled:s>=Math.ceil(r/h)-1,"aria-label":"next page",children:l.direction==="rtl"?e.jsx(P,{}):e.jsx(N,{})}),e.jsx(b,{onClick:i,disabled:s>=Math.ceil(r/h)-1,"aria-label":"last page",children:l.direction==="rtl"?e.jsx(y,{}):e.jsx(j,{})})]})}z.propTypes={count:x.number.isRequired,onPageChange:x.func.isRequired,page:x.number.isRequired,rowsPerPage:x.number.isRequired};function O({list:c}){const[l,r]=p.useState(0),[s,h]=p.useState(10);l>0&&Math.max(0,(1+l)*s-c.length);const o=(d,n)=>{r(n)},g=d=>{h(parseInt(d.target.value,10)),r(0)};return e.jsxs(e.Fragment,{children:[e.jsx(k,{component:S,children:e.jsxs(w,{"aria-label":"custom pagination table",children:[e.jsx(R,{children:e.jsxs(u,{children:[e.jsx(a,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Năm"}),e.jsx(a,{align:"center",colSpan:12,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",minWidth:"100px",backgroundColor:"rgb(30, 41, 59 )"},children:"Tháng"}),e.jsx(a,{align:"left",rowSpan:2,style:{fontSize:"14px",color:"#fff",padding:"8px 8px",backgroundColor:"rgb(30, 41, 59 )"},children:"Kết quả xếp loại đoàn viên"})]})}),e.jsxs(T,{children:[e.jsxs(u,{children:[e.jsx(a,{align:"center",className:"border-r border-slate-300"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"1"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"2"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"3"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"4"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"5"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"6"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"7"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"8"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"9"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"10"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"11"}),e.jsx(a,{align:"center",className:"border-r border-slate-300",style:{fontWeight:"bold"},children:"12"}),e.jsx(a,{align:"center",className:"border-r border-slate-300"})]}),(s>0?c.slice(l*s,l*s+s):c).map((d,n)=>{var i;return e.jsxs(u,{className:"hover:bg-slate-200 transition duration-300",children:[e.jsx(a,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:d.nam}),H(d.resultThiduathang),e.jsx(a,{className:"border-r border-slate-300",align:"left",style:{fontWeight:"bold"},children:e.jsx($,{title:(i=d.thiduanam)==null?void 0:i.ghichu,children:d.thiduanam.result})})]},d.nam)})]})]})}),e.jsx("div",{children:e.jsx(D,{rowsPerPageOptions:[10,25,50,100,{label:"Tất cả",value:-1}],count:c.length,rowsPerPage:s,page:l,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},component:"div",onPageChange:o,onRowsPerPageChange:g,ActionsComponent:z,labelRowsPerPage:"Số bản ghi hiển thị trên mỗi trang",labelDisplayedRows:function({from:n,to:i,count:t}){return`hiển thị ${n} đến ${i} bản ghi trong tổng số ${t!==-1?t:`more than ${i}`} bản ghi`}})})]})}const se=()=>{const[c,l]=Y();let{doanvienId:r}=v();const[s,h]=p.useState(null),[o,g]=p.useState([]),[d,n]=p.useState([]),[i,t]=p.useState([]);return p.useEffect(()=>{(async()=>{try{l(!0);let f=await F.detailDoanvien(r);l(!1),console.log(f.data.doanvien[0]),h(f.data.doanvien[0]),g(f.data.khenthuongs),n(f.data.kiluats),t(f.data.thiduas)}catch(f){console.log(f.message)}})()},[r]),A(m=>m.authReducer.roles_quanlydoanvien),e.jsxs("div",{className:"pr-2","data-aos":"fade-left","data-aos-once":"true",children:[e.jsxs("div",{className:"flex items-center space-x-1",children:[e.jsx(L,{color:"primary",fontSize:"large"}),e.jsx("h4",{className:"font-bold text-gray-800 text-lg",children:"Trang thông tin cá nhân"})]}),e.jsxs("ul",{className:"p-4 flex flex-col md:flex-row md:flex-wrap shadow-lg",children:[e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Họ tên:"})," ",e.jsx("span",{children:s==null?void 0:s.hoten})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Ngày sinh:"})," ",e.jsx("span",{children:C(s==null?void 0:s.ngaysinh).format("DD/MM/YYYY")})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Số hiệu CAND:"})," ",e.jsx("span",{children:s==null?void 0:s.sohieuCAND})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Quê quán:"})," ",e.jsx("span",{children:s==null?void 0:s.quequan})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Số CCCD:"})," ",e.jsx("span",{children:s==null?void 0:s.CCCD})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Đảng viên:"})," ",e.jsx("span",{children:(s==null?void 0:s.dangvien)===!0?"Là đảng viên":"Chưa kết nạp đảng"})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Bậc hàm:"})," ",e.jsx("span",{children:s==null?void 0:s.bachamPopulate[0].bacham})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Chức vụ:"})," ",e.jsx("span",{children:s==null?void 0:s.chucvuPopulate[0].chucvu})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Đơn vị công tác:"})," ",e.jsx("span",{children:(s==null?void 0:s.chuyencongtacngoaitinh)===!0?s==null?void 0:s.donvidiaphuongkhac[0].tendonvi:s==null?void 0:s.donviPopulate[0].tendonvi})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Trình độ:"})," ",e.jsx("span",{children:s==null?void 0:s.trinhdo})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Lý luận chính trị:"})," ",e.jsx("span",{children:s==null?void 0:s.lyluanchinhtri})]}),e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Trưởng thành đoàn:"})," ",e.jsx("span",{children:(s==null?void 0:s.truongthanhdoan)===!0?"Đã trưởng thành đoàn":"Chưa"})]}),(s==null?void 0:s.truongthanhdoan)===!0&&e.jsxs("li",{className:"md:basis-1/3 my-1 flex justify-between pr-8 border-r-slate-100",children:[e.jsx("span",{className:"font-semibold",children:"Ngày trưởng thành đoàn:"})," ",e.jsx("span",{children:(s==null?void 0:s.truongthanhdoan)===!0&&C(s==null?void 0:s.ngaytruongthanhdoan).format("DD/MM/YYYY")})]})]}),o.length>0&&e.jsxs("div",{className:"px-4 my-8","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx("h4",{className:"my-2 text-center font-medium text-lg",children:"Danh sách khen thưởng cá nhân"}),e.jsx(I,{list:o})]}),d.length>0&&e.jsxs("div",{className:"px-4 my-8","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx("h4",{className:"my-2 text-center font-medium text-lg",children:"Danh sách kết quả kỉ luật"}),e.jsx(K,{list:d})]}),i.length>0&&e.jsxs("div",{className:"px-4 my-8","data-aos":"fade-left","data-aos-once":"true",children:[e.jsx("h4",{className:"my-2 text-center font-medium text-lg",children:"Bảng theo dõi thi đua qua các năm"}),e.jsx(O,{list:i})]})]})};export{se as default};
