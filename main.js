class MyNavbar extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
<div class="header">
<a href="../index.html"><img src="../images/vietjack.png" alt=""></a>
<div class="top-right">
 <div class="custom-search-section">
   <input type="text" id="custom-search-input" placeholder="Nhập từ khóa tìm tài liệu, khóa học..." />
   <a id="custom-search-icon"
     href="https://cse.google.com/cse?cx=000101843498206225654%3Abnqd99qkega&ie=UTF-8&q=#gsc.tab=0"><img
       src="../images/research.png" width="25" height="20" /></a>
 </div>
 <div id="teacher-button">
   <button id="teacher-docs-button">
     <i style="margin-left: 5px;" class="fa fa-book"></i>
     <p style="margin-right: 4px;">TÀI LIỆU GIÁO VIÊN</p>
   </button>
 </div>
</div>
</div>

<div class="navbar">
<a href="../index.html"><img src="../images/anhTrangChu.png" width="40px" height="41px" alt="Icon" class="menu-icon" /></a>
<div class="dropdown">
      <a href="series/lop1.html">LỚP 1</a>
      <div class="dropdown-content">
        <div class="columnt">
          <div class="content">
            <a href="../lop1/gvbtv1 kntt.html">Giải Vở bài tập Tiếng Việt lớp 1 - KNTT</a>
            <a href="../lop1/gvbtv1.html">Bài tập Tiếng Việt lớp 1(Buổi học 2)</a>
            <a href="../lop1/bttv1 st.html">Bài tập Tiếng Việt lớp 1 - CTST</a>
            <a href="../lop1/bttv1 cd.html">Bài tập Tiếng Việt lớp 1 - CD</a>
          </div>
        </div>

        <div class="columnt">
          <div class="content">
            <a href="../lop1/gbtt1 kntt.html">Giải bài tập sgk Toán lớp 1 - KNTT</a>
            <a href="../lop1/gvbtt1 kntt.html">Giải Vở bài tập Toán lớp 1 - KNTT</a>
            <a href="../lop1/gvbtt1 st.html">Giải Vở bài tập Toán lớp 1 - CTST</a>
            <a href="../lop1/gbtt1 cd.html">Giải bài tập sgk Toán lớp 1 - CD</a>
            <a href="../lop1/gvbtt1 cd.html">Giải Vở bài tập Toán lớp 1 - CD</a>
          </div>
        </div>

        <div class="columnt">
        <a style="pointer-events: none;" href="#">TÀI LIỆU GIÁO VIÊN</a>
        <div class="content">
          <a href="../lop1/pp1.html">Giáo án, Bài giảng Powerpoint lớp 1</a>
          <a href="../lop1/de thi1.html">Đề thi Học kì lớp 1</a>
          <a href="../lop1/btct toan1.html">Bài tập cuối tuần Toán lớp 1</a>
          <a href="../lop1/btct tv1.html">Bài tập cuối tuần Tiếng Việt lớp 1</a>
        </div>
      </div>
      </div>
    </div>

<div class="dropdown">
 <a href="#">LỚP 2</a>
 <div class="dropdown-content">
 <div class="columnt">
 <a href="#">LỚP 2 - KẾT NỐI TRI THỨC</a>
 <div class="content">
   <a href="../lop2/gt2 kntt.html">Giải Toán lớp 2</a>
   <a href="../lop2/gvbtt2 kntt.html">Giải Vở bài tập Toán 2</a>
   <a href="../lop2/gtv2 kntt.html">Giải Tiếng Việt lớp 2</a>
   <a href="../lop2/gvbttv2 kntt.html">Giải Vở bài tập Tiếng Việt lớp 2</a>
   <a href="../lop2/gta2 kntt.html">Giải Tiếng Anh lớp 2</a>
   <a href="../lop2/gtnxh2 kntt.html">Giải Tự nhiên & Xã hội lớp 2</a>
   <a href="../lop2/gdd2 kntt.html">Giải Đạo Đức lớp 2</a>
   <a href="../lop2/gbtdd2 kntt.html">Giải Vở bài tập Đạo Đức lớp 2</a>
   <a href="../lop2/gvbthdtn2 kntt.html">Giải VBT Hoạt động trải nghiệm lớp 2</a>
   <a href="../lop2/ghdtn2 kntt.html">Giải Hoạt động trải nghiệm lớp 2</a>
   <a href="../lop2/gan2 kntt.html">Giải Âm nhạc lớp 2</a>
 </div>
</div>

<div class="columnt">
 <a href="#">LỚP 2 - CHÂN TRỜI SÁNG TẠO</a>
 <div class="content">
   <a href="../lop2/gt2 st.html">Giải Toán lớp 2</a>
   <a href="../lop2/gvbtt2 st.html">Giải Vở bài tập Toán 2</a>
   <a href="../lop2/gtv2 st.html">Giải Tiếng Việt lớp 2</a>
   <a href="../lop2/gvbttv2 st.html">Giải Vở bài tập Tiếng Việt lớp 2</a>
   <a href="../lop2/gta st.html">Giải Tiếng Anh lớp 2</a>
   <a href="../lop2/gtnxh2 st.html">Giải Tự nhiên & Xã hội lớp 2</a>
   <a href="../lop2/gdd2 st.html">Giải Đạo Đức lớp 2</a>
   <a href="../lop2/gvbtdd2 st.html">Giải Vở bài tập Đạo Đức lớp 2</a>
   <a href="../lop2/gan2 st.html">Giải Âm nhạc lớp 2</a>
 </div>
</div>

<div class="columnt">
 <a href="#">LỚP 2 - CÁNH DIỀU</a>
 <div class="content">
   <a href="../lop2/gt2 cd.html">Giải Toán lớp 2</a>
   <a href="../lop2/gtv2 cd.html">Giải Tiếng Việt lớp 2</a>
   <a href="../lop2/gvbttv2 cd.html">Giải Vở bài tập Tiếng Việt lớp 2</a>
   <a href="../lop2/gta2 cd.html">Giải Tiếng Anh lớp 2</a>
   <a href="../lop2/gtnxh2 cd.html">Giải Tự nhiên & Xã hội lớp 2</a>
   <a href="../lop2/ghdtn2 cd.html">Giải Hoạt động trải nghiệm lớp 2</a>
   <a href="../lop2/gan2 cd.html">Giải Âm nhạc lớp 2</a>
 </div>
</div>

<div class="columnt">
<a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
<div class="content">
  <a href="../lop2/pp2.html">Giáo án, Bài giảng Powerpoint lớp 2</a>
  <a href="../lop2/de thi2.html">Đề thi Học kì lớp 2</a>
  <a href="../lop2/btct toan2.html">Bài tập cuối tuần Toán lớp 2</a>
  <a href="../lop2/btct tv2.html">Bài tập cuối tuần Tiếng Việt lớp 2</a>
</div>
</div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 3</a>
 <div class="dropdown-content">
 <div class="columnt">
 <a href="#">LỚP 3 - KẾT NỐI TRI THỨC</a>
 <div class="content">
   <a href="../lop3/gt3 kntt.html">Giải Toán lớp 3</a>
   <a href="../lop3/gvbtt3 kntt.html">Giải Vở bài tập Toán lớp 3</a>
   <a href="../lop3/gtv3 kntt.html">Giải Tiếng Việt lớp 3</a>
   <a href="../lop3/gvbttv3 kntt.html">Giải Vở bài tập Tiếng Việt lớp 3</a>
   <a href="../lop3/gdd3 kntt.html">Giải Đạo đức lớp 3</a>
   <a href="../lop3/gth3 kntt.html">Giải Tin học lớp 3</a>
   <a href="../lop3/cn3 kntt.html">Giải Công nghệ lớp 3</a>
   <a href="../lop3/ghdtn3 kntt.html">Giải Hoạt động trải nghiệm lớp 3</a>
   <a href="../lop3/gtnxh3 kntt.html">Giải Tự nhiên xã hội lớp 3</a>
 </div>
</div>

<div class="columnt">
<a href="#">LỚP 3 - CHÂN TRỜI SÁNG TẠO</a>
<div class="content">
  <a href="../lop3/gt3 st.html">Giải Toán lớp 3</a>
  <a href="../lop3/gvbtt3 st.html">Giải Vở bài tập Toán lớp 3</a>
  <a href="../lop3/gtv3 st.html">Giải Tiếng Việt lớp 3</a>
  <a href="../lop3/gvbttv3 st.html">Giải Vở bài tập Tiếng Việt lớp 3</a>
  <a href="../lop3/gdd3 st.html">Giải Đạo đức lớp 3</a>
  <a href="../lop3/gth3 st.html">Giải Tin học lớp 3</a>
  <a href="../lop3/cn3 st.html">Giải Công nghệ lớp 3</a>
  <a href="../lop3/ghdtn3 st.html">Giải Hoạt động trải nghiệm lớp 3</a>
  <a href="../lop3/gtnxh3 st.html">Giải Tự nhiên xã hội lớp 3</a>
</div>
</div>

<div class="columnt">
<a href="#">LỚP 3 - CÁNH DIỀU</a>
<div class="content">
  <a href="../lop3/gt3 cd.html">Giải Toán lớp 3</a>
  <a href="../lop3/gvbtt3 cd.html">Giải Vở bài tập Toán lớp 3</a>
  <a href="../lop3/gtv3 cd.html">Giải Tiếng Việt lớp 3</a>
  <a href="../lop3/gvbttv3 cd.html">Giải Vở bài tập Tiếng Việt lớp 3</a>
  <a href="../lop3/gdd3 cd.html">Giải Đạo đức lớp 3</a>
  <a href="../lop3/gth3 cd.html">Giải Tin học lớp 3</a>
  <a href="../lop3/cn3 cd.html">Giải Công nghệ lớp 3</a>
  <a href="../lop3/ghdtn3 cd.html">Giải Hoạt động trải nghiệm lớp 3</a>
  <a href="../lop3/gtnxh3 cd.html">Giải Tự nhiên xã hội lớp 3</a>
</div>
</div>

   <div class="columnt">
   <a class="not-hover" href="#">TIẾNG ANH</a>
   <div class="content">
     <a href="../lop3/gta3 cd.html">Giải Tiếng Anh lớp 3 Global Success</a>
     <a href="../lop3/gta3 st.html">Giải Tiếng Anh lớp 3 Smart Start</a>
     <a href="../lop3/gdd3 kntt.html">Giải Tiếng Anh lớp 3 Family and Friends</a>
     <a href="../lop3/gta3 eow.html">Giải Tiếng Anh lớp 3 Explore Our World</a><br>
   </div>
   <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
   <div class="content">
     <a href="../lop3/pp3 kntt.html">Giáo án, Bài giảng powerpoint lớp 3</a>
     <a href="../lop3/de thi3.html">Đề thi Học kì lớp 3</a>
     <a href="../lop3/btct toan3.html">Bài tập cuối tuần Toán lớp 3</a>
     <a href="../lop3/btct tv3.html">Bài tập cuối tuần Tiếng Việt lớp 3</a>
   </div>
 </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 4</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a href="#">LỚP 4 - KẾT NỐI TRI THỨC</a>
     <div class="content">
       <a href="#">Giải Toán lớp 4</a>
       <a href="#">Giải Vở bài tập Toán lớp 4</a>
       <a href="#">Giải Tiếng Việt lớp 4</a>
       <a href="#">Giải Vở bài tập Tiếng Việt lớp 4</a>
       <a href="#">Giải sgk Đạo đức lớp 4</a>
       <a href="#">Giải Khoa học lớp 4</a>
       <a href="#">Giải Lịch Sử và Địa Lí lớp 4</a>
       <a href="#">Giải Hoạt động trải nghiệm lớp 4</a>
       <a href="#">Giải Tin học lớp 4</a>
       <a href="#">Giải Công nghệ lớp 4</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 4 - CHÂN TRỜI SÁNG TẠO</a>
     <div class="content">
       <a href="#">Giải Toán lớp 4</a>
       <a href="#">Giải Vở bài tập Toán lớp 4</a>
       <a href="#">Giải Tiếng Việt lớp 4</a>
       <a href="#">Giải Vở bài tập Tiếng Việt lớp 4</a>
       <a href="#">Giải Đạo đức lớp 4</a>
       <a href="#">Giải Khoa học lớp 4</a>
       <a href="#">Giải Lịch Sử và Địa Lí lớp 4</a>
       <a href="#">Giải Hoạt động trải nghiệm lớp 4</a>
       <a href="#">Giải Tin học lớp 4</a>
       <a href="#">Giải Công nghệ lớp 4</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 4 - CÁNH DIỀU</a>
     <div class="content">
       <a href="#">Giải Toán lớp 4</a>
       <a href="#">Giải Vở bài tập Toán lớp 4</a>
       <a href="#">Giải Tiếng Việt lớp 4</a>
       <a href="#">Giải Vở bài tập Tiếng Việt lớp 4</a>
       <a href="#">Giải Đạo đức lớp 4</a>
       <a href="#">Giải Khoa học lớp 4</a>
       <a href="#">Giải Lịch Sử và Địa Lí lớp 4</a>
       <a href="#">Giải Hoạt động trải nghiệm lớp 4</a>
       <a href="#">Giải Tin học lớp 4</a>
       <a href="#">Giải Công nghệ lớp 4</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">TIẾNG ANH</a>
     <div class="content">
       <a href="#">Giải Tiếng Anh lớp 4 Global Success</a>
       <a href="#">Giải Tiếng Anh lớp 4 Smart Start</a>
       <a href="#">Giải Tiếng Anh lớp 4 Family and Friends</a>
       <a href="#">Giải Tiếng Anh lớp 4 Explore Our World</a><br>
     </div>
       <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
       <div class="content">
         <a href="#">Giáo án, Bài giảng powerpoint lớp 4</a>
         <a href="#">Đề thi Học kì lớp 4</a>
         <a href="#">Bài tập cuối tuần Toán lớp 4</a>
         <a href="#">Bài tập cuối tuần Tiếng Việt lớp 4</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 5</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a href="#">Sách giáo khoa</a>
     <div class="content">
       <a href="#">Giải Tiếng Việt lớp 5</a>
       <a href="#">Giải Vở bài tập Tiếng Việt 5</a>
       <a href="#">Văn mẫu lớp 5</a>
       <a href="#">Giải Toán lớp 5</a>
     </div>
   </div>

   <div class="columnt">
     <div class="content">
       <a href="#">Giải Vở bài tập Toán 5</a>
       <a href="#">Giải Tiếng Anh lóp 5</a>
       <a href="#">Giải Khoa học 5</a>
       <a href="#">Giải Lịch Sử 5</a>
     </div>
   </div>

   <div class="columnt">
     <div class="content">
       <a href="#">Giải Địa Lí 5</a>
       <a href="#">Giải Đạo Đức 5</a>
       <a href="#">Giải Tin Học 5</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">SÁCH/VỞ BÀI TẬP</a>
     <div class="content">
       <a href="#">Giải SBT & VBT lớp 5 (các môn)</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#" class="not-hover">TÀI LIỆU GIÁO VIÊN</a>
     <div class="content">
       <a href="#">Giáo án, Bài giảng powerpoint lớp 5</a>
       <a href="#">Đề thi Giữa kì, Cuối kì lớp 5</a>
       <a href="#">Bài tập cuối tuần Tiếng Việt lớp 5</a>
       <a href="#">Bài tập cuối tuần Toán lớp 5</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 6</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a href="#">LỚP 6 - KẾT NỐI TRI THỨC</a>
     <div class="content">
       <a href="#">Soạn Văn 6 (hay nhất)</a>
       <a href="#">Soạn Văn 6 (ngắn nhất)</a>
       <a href="#">Giải Toán lớp 6</a>
       <a href="#">Giải Khoa học tự nhiên 6</a>
       <a href="#">Giải Lịch sử 6</a>
       <a href="#">Giải Địa Lí 6</a>
       <a href="#">Giải GDCD 6</a>
       <a href="#">Giải Hoạt động trải nghiệm 6</a>
       <a href="#">Giải Tin học 6</a>
       <a href="#">Giải Công nghệ 6</a>
       <a href="#">Giải Âm nhạc 6</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 6 - CHÂN TRỜI SÁNG TẠO</a>
     <div class="content"></div>
     <a href="#">Soạn Văn 6 (hay nhất)</a>
     <a href="#">Soạn Văn 6 (ngắn nhất)</a>
     <a href="#">Giải Toán lớp 6</a>
     <a href="#">Giải Khoa học tự nhiên 6</a>
     <a href="#">Giải Lịch sử 6</a>
     <a href="#">Giải Địa Lí 6</a>
     <a href="#">Giải GDCD 6</a>
     <a href="#">Giải Hoạt động trải nghiệm 6</a>
     <a href="#">Giải Tin học 6</a>
     <a href="#">Giải Công nghệ 6</a>
     <a href="#">Giải Âm nhạc 6</a>
   </div>

   <div class="columnt">
     <a href="#">LỚP 6 - CÁNH DIỀU</a>
     <div class="content">
       <a href="#">Soạn Văn 6 (hay nhất)</a>
       <a href="#">Soạn Văn 6 (ngắn nhất)</a>
       <a href="#">Giải Toán lớp 6</a>
       <a href="#">Giải Khoa học tự nhiên 6</a>
       <a href="#">Giải Lịch sử 6</a>
       <a href="#">Giải Địa Lí 6</a>
       <a href="#">Giải GDCD 6</a>
       <a href="#">Giải Hoạt động trải nghiệm 6</a>
       <a href="#">Giải Tin học 6</a>
       <a href="#">Giải Công nghệ 6</a>
       <a href="#">Giải Âm nhạc 6</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">TIẾNG ANH</a>
     <div class="content">
         <a href="#">Giải Tiếng Anh 6 Global Success</a>
         <a href="#">Giải Tiếng Anh 6 Smart World</a>
         <a href="#">Giải Tiếng Anh 6 Friends plus</a>
         <a href="#">Giải Tiếng Anh 6 Explore English</a><br>
     </div>
       <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
       <div class="content">
         <a href="#">Giáo án, Bài giảng powerpoint lớp 6</a>
         <a href="#">Đề thi Giữa kì, Cuối kì lớp 6</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 7</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a href="#">LỚP 7 - KẾT NỐI TRI THỨC</a>
     <div class="content">
       <a href="#">Soạn văn lớp 7 (hay nhất)</a>
       <a href="#">Soạn văn lớp 7 (ngắn nhất)</a>
       <a href="#">Giải Toán lớp 7</a>
       <a href="#">Giải Khoa học tự nhiên lớp 7</a>
       <a href="#">Giải Lịch Sử lớp 7</a>
       <a href="#">Giải Địa Lí lớp 7</a>
       <a href="#">Giải Giáo dục công dân lớp 7</a>
       <a href="#">Giải Hoạt động trải nghiệm 6</a>
       <a href="#">Giải Công nghệ lớp 7</a>
       <a href="#">Giải Tin học lớp 7</a>
       <a href="#">Giải Hoạt động trải nghiệm lớp 7</a>
       <a href="#">Giải Giáo dục thể chất lớp 7</a>
       <a href="#">Giải Âm nhạc lớp 7</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 7 - CHÂN TRỜI SÁNG TẠO</a>
     <div class="content">
       <a href="#">Soạn văn lớp 7 (hay nhất)</a>
       <a href="#">Soạn văn lớp 7 (ngắn nhất)</a>
       <a href="#">Giải Toán lớp 7</a>
       <a href="#">Giải Khoa học tự nhiên lớp 7</a>
       <a href="#">Giải Lịch Sử lớp 7</a>
       <a href="#">Giải Địa Lí lớp 7</a>
       <a href="#">Giải Giáo dục công dân lớp 7</a>
       <a href="#">Giải Hoạt động trải nghiệm 6</a>
       <a href="#">Giải Công nghệ lớp 7</a>
       <a href="#">Giải Tin học lớp 7</a>
       <a href="#">Giải Hoạt động trải nghiệm lớp 7</a>
       <a href="#">Giải Âm nhạc lớp 7</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 7 - CÁNH DIỀU</a>
     <div class="content">
       <a href="#">Soạn văn lớp 7 (hay nhất)</a>
       <a href="#">Soạn văn lớp 7 (ngắn nhất)</a>
       <a href="#">Giải Toán lớp 7</a>
       <a href="#">Giải Khoa học tự nhiên lớp 7</a>
       <a href="#">Giải Lịch Sử lớp 7</a>
       <a href="#">Giải Địa Lí lớp 7</a>
       <a href="#">Giải Giáo dục công dân lớp 7</a>
       <a href="#">Giải Hoạt động trải nghiệm 6</a>
       <a href="#">Giải Công nghệ lớp 7</a>
       <a href="#">Giải Tin học lớp 7</a>
       <a href="#">Giải Hoạt động trải nghiệm lớp 7</a>
       <a href="#">Giải Giáo dục thể chất lớp 7</a>
       <a href="#">Giải Âm nhạc lớp 7</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">TIẾNG ANH</a>
     <div class="content">
       <a href="#">Giải Tiếng Anh 7 Global Success</a>
       <a href="#">Giải Tiếng Anh 7 Smart World</a>
       <a href="#">Giải Tiếng Anh 7 Friends plus</a>
       <a href="#">Giải Tiếng Anh 7 Explore English</a><br>
     </div>
       <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
       <div class="content">
         <a href="#">Giáo án, Bài giảng powerpoint lớp 7</a>
         <a href="#">Đề thi Giữa kì, Cuối kì lớp 7</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 8</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a href="#">LỚP 8 - KẾT NỐI TRI THỨC</a>
     <div class="content">
       <a href="#">Soạn văn 8 (hay nhất)</a>
       <a href="#">Soạn văn 8 (ngắn nhất)</a>
       <a href="#">Giải Toán 8</a>
       <a href="#">Giải Khoa học tự nhiên 8</a>
       <a href="#">Giải Lịch Sử 8</a>
       <a href="#">Giải Địa Lí 8</a>
       <a href="#">Giải Giáo dục công dân 8</a>
       <a href="#">Giải Tin học 8</a>
       <a href="#">Giải Công nghệ 8</a>
       <a href="#">Giải Hoạt động trải nghiệm 8</a>
       <a href="#">Giải Âm nhạc 8</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 8 - CHÂN TRỜI SÁNG TẠO</a>
     <div class="content">
       <a href="#">Soạn văn 8 (hay nhất)</a>
       <a href="#">Soạn văn 8 (ngắn nhất)</a>
       <a href="#">Giải Toán 8</a>
       <a href="#">Giải Khoa học tự nhiên 8</a>
       <a href="#">Giải Lịch Sử 8</a>
       <a href="#">Giải Địa Lí 8</a>
       <a href="#">Giải Giáo dục công dân 8</a>
       <a href="#">Giải Tin học 8</a>
       <a href="#">Giải Công nghệ 8</a>
       <a href="#">Giải Hoạt động trải nghiệm 8</a>
       <a href="#">Giải Âm nhạc 8</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 8 - CÁNH DIỀU</a>
     <div class="content">
       <a href="#">Soạn văn 8 (hay nhất)</a>
       <a href="#">Soạn văn 8 (ngắn nhất)</a>
       <a href="#">Giải Toán 8</a>
       <a href="#">Giải Khoa học tự nhiên 8</a>
       <a href="#">Giải Lịch Sử 8</a>
       <a href="#">Giải Địa Lí 8</a>
       <a href="#">Giải Giáo dục công dân 8</a>
       <a href="#">Giải Tin học 8</a>
       <a href="#">Giải Công nghệ 8</a>
       <a href="#">Giải Hoạt động trải nghiệm 8</a>
       <a href="#">Giải Âm nhạc 8</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">TIẾNG ANH</a>
     <div class="content">
       <a href="#">Giải Tiếng Anh 8 Global Success</a>
       <a href="#">Giải Tiếng Anh 8 Smart World</a>
       <a href="#">Giải Tiếng Anh 8 Friends plus</a><br>
     </div>
       <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
       <div class="content">
       <a href="#">Giáo án, Bài giảng powerpoint lớp 8</a>
       <a href="#">Đề thi Giữa kì, Cuối kì lớp 8</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 9</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a class="not-hover" href="#">SÁCH GIÁO KHOA</a>
     <div class="content">
       <a href="#">Soạn Văn 9 (hay nhất)</a>
       <a href="#">Soạn Văn 9 (ngắn nhất)</a>
       <a href="#">Soạn Văn 9 (siêu ngắn)</a>
       <a href="#">Soạn Văn 9 (cực ngắn)</a>
       <a href="#">Văn mẫu lớp 9</a>
       <a href="#">Giải Toán 9</a>
     </div>
   </div>

   <div class="columnt">
     <div class="content">
       <a href="#">Giải Vật Lí 9</a>
       <a href="#">Giải Hóa 9</a>
       <a href="#">Giải Sinh 9</a>
       <a href="#">Giải Địa Lí 9</a>
       <a href="#">Giải Tiếng Anh 9</a>
       <a href="#">Giải Tiếng Anh 9 mới</a>
     </div>
   </div>

   <div class="columnt">
     <div class="content">
       <a href="#">Giải Lịch sử 9</a>
       <a href="#">Giải Tin học 9</a>
       <a href="#">Giải GDCD 9</a>
       <a href="#">Giải Công nghệ 9</a>
       <a href="#">Giải Âm nhạc 9</a>
       <a href="#">Giải Mỹ thuật 9</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">SÁCH VỞ BÀI TẬP</a>
     <div class="content">
       <a href="#">Giải SBT lớp 9 (các môn)</a><br>
       <a href="#">TÀI LIỆU GIÁO VIÊN</a>
       <a href="#">Giáo án, Bài giảng powerpoint lớp 9</a>
       <a href="#">Đề thi Giữa kì, Cuối kì lớp 9</a>
       <a href="#">Đề thi vào 10 môn Toán (các tỉnh)</a>
       <a href="#">Đề thi vào 10 môn Văn (các tỉnh)</a>
       <a href="#">Đề thi vào 10 môn Tiếng Anh (các tỉnh)</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 10</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a href="#">LỚP 10 - KẾT NỐI TRI THỨC</a>
     <div class="content">
       <a href="#">Soạn văn 10 (hay nhất)</a>
       <a href="#">Soạn văn 10 (ngắn nhất)</a>
       <a href="#">GGiải Toán 10</a>
       <a href="#">Giải Chuyên đề Toán 10</a>
       <a href="#">Giải Vật lí 10</a>
       <a href="#">Giải Hóa học 10</a>
       <a href="#">Giải Sinh học 10</a>
       <a href="#">Giải Lịch sử 10</a>
       <a href="#">Giải Địa lí 10</a>
       <a href="#">Giải Công nghệ 10</a>
       <a href="#">Giải Tin học 10</a>
       <a href="#">Giải Hoạt động trải nghiệm 10</a>
       <a href="#">Giải Giáo dục quốc phòng 10</a>
       <a href="#">Giải Giáo dục thể chất 10</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 10 - CHÂN TRỜI SÁNG TẠO</a>
     <div class="content">
       <a href="#">Soạn văn 10 (hay nhất)</a>
       <a href="#">Soạn văn 10 (ngắn nhất)</a>
       <a href="#">GGiải Toán 10</a>
       <a href="#">Giải Chuyên đề Toán 10</a>
       <a href="#">Giải Vật lí 10</a>
       <a href="#">Giải Hóa học 10</a>
       <a href="#">Giải Sinh học 10</a>
       <a href="#">Giải Lịch sử 10</a>
       <a href="#">Giải Địa lí 10</a>
       <a href="#">Giải Công nghệ 10</a>
       <a href="#">Giải Tin học 10</a>
       <a href="#">Giải Hoạt động trải nghiệm 10</a>
       <a href="#">Giải Giáo dục quốc phòng 10</a>
     </div>
   </div>

   <div class="columnt">
     <a href="#">LỚP 10 - CÁNH DIỀU</a>
     <div class="content">
       <a href="#">Soạn văn 10 (hay nhất)</a>
       <a href="#">Soạn văn 10 (ngắn nhất)</a>
       <a href="#">GGiải Toán 10</a>
       <a href="#">Giải Chuyên đề Toán 10</a>
       <a href="#">Giải Vật lí 10</a>
       <a href="#">Giải Hóa học 10</a>
       <a href="#">Giải Sinh học 10</a>
       <a href="#">Giải Lịch sử 10</a>
       <a href="#">Giải Địa lí 10</a>
       <a href="#">Giải Công nghệ 10</a>
       <a href="#">Giải Tin học 10</a>
       <a href="#">Giải Hoạt động trải nghiệm 10</a>
       <a href="#">Giải Giáo dục quốc phòng 10</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">TIẾNG ANH</a>
     <div class="content">
       <a href="#">Giải Tiếng Anh 10 Global Success</a>
       <a href="#">Giải Tiếng Anh 10 Smart World</a>
       <a href="#">Giải Tiếng Anh 10 Friends Global</a>
       <a href="#">Giải Tiếng Anh 10 Explore New Worlds</a><br>
     </div>
       <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
       <div class="content">
         <a href="../lop10/">Giáo án, Bài giảng powerpoint lớp 10</a>
         <a href="#">Đề thi giữa kì, Cuối kì lớp 10</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 11</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a href="#">LỚP 11 - KẾT NỐI TRI THỨC</a>
     <div class="content">
     <a href="#">Soạn văn 11 (hay nhất)</a>
     <a href="#">Soạn văn 11 (ngắn nhất)</a>
     <a href="#">GGiải Toán 11</a>
     <a href="#">Giải Chuyên đề Toán 11</a>
     <a href="#">Giải Vật lí 11</a>
     <a href="#">Giải Hóa học 11</a>
     <a href="#">Giải Sinh học 11</a>
     <a href="#">Giải Lịch sử 11</a>
     <a href="#">Giải Địa lí 11</a>
     <a href="#">Giải Công nghệ 11</a>
     <a href="#">Giải Tin học 11</a>
     <a href="#">Giải Hoạt động trải nghiệm 11</a>
     <a href="#">Giải Giáo dục quốc phòng 11</a>
     <a href="#">Giải Giáo dục thể chất 11</a>
   </div>
 </div>

   <div class="columnt">
     <a href="#">LỚP 11 - CHÂN TRỜI SÁNG TẠO</a>
     <div class="content">
     <a href="#">Soạn văn 11 (hay nhất)</a>
     <a href="#">Soạn văn 11 (ngắn nhất)</a>
     <a href="#">GGiải Toán 11</a>
     <a href="#">Giải Chuyên đề Toán 11</a>
     <a href="#">Giải Vật lí 11</a>
     <a href="#">Giải Hóa học 11</a>
     <a href="#">Giải Sinh học 11</a>
     <a href="#">Giải Lịch sử 11</a>
     <a href="#">Giải Địa lí 11</a>
     <a href="#">Giải Công nghệ 11</a>
     <a href="#">Giải Tin học 11</a>
     <a href="#">Giải Hoạt động trải nghiệm 11</a>
     <a href="#">Giải Giáo dục quốc phòng 11</a>
   </div>
 </div>

   <div class="columnt">
     <a href="#">LỚP 11 - CÁNH DIỀU</a>
     <div class="content">
       <a href="#">Soạn văn 11 (hay nhất)</a>
       <a href="#">Soạn văn 11 (ngắn nhất)</a>
       <a href="#">GGiải Toán 11</a>
       <a href="#">Giải Chuyên đề Toán 11</a>
       <a href="#">Giải Vật lí 11</a>
       <a href="#">Giải Hóa học 11</a>
       <a href="#">Giải Sinh học 11</a>
       <a href="#">Giải Lịch sử 11</a>
       <a href="#">Giải Địa lí 11</a>
       <a href="#">Giải Công nghệ 11</a>
       <a href="#">Giải Tin học 11</a>
       <a href="#">Giải Hoạt động trải nghiệm 11</a>
       <a href="#">Giải Giáo dục quốc phòng 11</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">TIẾNG ANH</a>
     <div class="content">
       <a href="#">Giải Tiếng Anh 11 Global Success</a>
       <a href="#">Giải Tiếng Anh 11 Smart World</a>
       <a href="#">Giải Tiếng Anh 11 Friends Global</a>
     </div>
       <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
       <div class="content">
         <a href="#">Giáo án, Bài giảng powerpoint lớp 11</a>
         <a href="#">Đề thi giữa kì, Cuối kì lớp 11</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">LỚP 12</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a class="not-hover" href="#">SÁCH GIÁO KHOA</a>
     <div class="content">
       <a href="#">Soạn Văn 12 (hay nhất)</a>
       <a href="#">Soạn Văn 12 (ngắn nhất)</a>
       <a href="#">Soạn Văn 12 (siêu ngắn)</a>
       <a href="#">Soạn Văn 12 (cực ngắn)</a>
       <a href="#">Văn mẫu lớp 12</a>
       <a href="#">Giải Toán 12</a>
       <a href="#">Giải Toán 12 Nâng cao</a>
     </div>
   </div>

   <div class="columnt">
     <div class="content">
       <a href="#">Giải Vật Lí 12</a>
       <a href="#">Giải Vật Lí 12 Nâng cao</a>
       <a href="#">Giải Hóa 12</a>
       <a href="#">Giải Hóa 12 nâng cao</a>
       <a href="#">Giải Sinh 12</a>
       <a href="#">Giải Sinh 12 nâng cao</a>
       <a href="#">Giải Địa Lí 12</a>
     </div>
   </div>

   <div class="columnt">
     <div class="content">
       <a href="#">Giải Tiếng Anh 12</a>
       <a href="#">Giải Tiếng Anh 12 mới</a>
       <a href="#">Giải Lịch sử 12</a>
       <a href="#">Giải Tin học 12</a>
       <a href="#">Giải GDCD 12</a>
       <a href="#">Giải Công nghệ 12</a>
       <a href="#">Giải Giáo dục quốc phòng 12</a>
     </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">SÁCH VỞ BÀI TẬP</a>
     <div class="content">
       <a href="#">Giải SBT lớp 12 (các môn)</a><br>
     </div>
       <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
       <div class="content">
         <a href="#">TÀI LIỆU GIÁO VIÊN</a>
         <a href="#">Giáo án, Bài giảng powerpoint lớp 12</a>
         <a href="#">Đề thi Giữa kì, Cuối kì lớp 12</a>
         <a href="#">Đề ôn thi THPTQG (các môn)</a>
         <a href="#">Đề thi thử 2023 THPTQG (cả nước)</a>
         <a href="#">Đề thi ĐGNL, ĐGTD năm 2023</a>
     </div>
   </div>
 </div>
</div>

<div class="dropdown">
 <a href="#">GIÁO VIÊN</a>
 <div class="dropdown-content">
   <div class="columnt">
     <a class="not-hover" href="#">LỚP 1</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 1</a>
     <a href="#">Đề thi Học kì lớp 1</a>
     <a href="#">Bài tập cuối tuần Toán lớp 1</a>
     <a href="#">Bài tập cuối tuần Tiếng Việt lớp 1</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 2</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 2</a>
     <a href="#">Đề thi Học kì lớp 2</a>
     <a href="#">Bài tập cuối tuần Toán lớp 2</a>
     <a href="#">Bài tập cuối tuần Tiếng Việt lớp 2</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 3</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 3</a>
     <a href="#">Đề thi Học kì lớp 3</a>
     <a href="#">Bài tập cuối tuần Toán lớp 3</a>
     <a href="#">Bài tập cuối tuần Tiếng Việt lớp 3</a><br>
   </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">LỚP 4</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 4</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 4</a>
     <a href="#">Bài tập cuối tuần Toán lớp 4</a>
     <a href="#">Bài tập cuối tuần Tiếng Việt lớp 4</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 5</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 5</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 5</a>
     <a href="#">Bài tập cuối tuần Toán lớp 5</a>
     <a href="#">Bài tập cuối tuần Tiếng Việt lớp 5</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 6</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 6</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 6</a>
   </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">LỚP 7</a>
     <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 7</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 7</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 8</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 8</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 8</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 9</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 9</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 9</a>
     <a href="#">Đề thi vào 10 môn Toán (các tỉnh)</a>
     <a href="#">Đề thi vào 10 môn Văn (các tỉnh)</a>
     <a href="#">Đề thi vào 10 môn Tiếng Anh (các tỉnh)</a>
   </div>
   </div>

   <div class="columnt">
     <a class="not-hover" href="#">LỚP 10</a>
     <div class="content">
       <a href="#">Giáo án, Bài giảng powerpoint lớp 10</a>
       <a href="#">Đề thi Giữa kì, Cuối kì lớp 10</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 11</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 11</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 11</a><br>
   </div>
   <a class="not-hover" href="#">LỚP 12</a>
   <div class="content">
     <a href="#">Giáo án, Bài giảng powerpoint lớp 12</a>
     <a href="#">Đề thi Giữa kì, Cuối kì lớp 12</a>
     <a href="#">Bộ đề ôn thi THPT Quốc gia (các môn)</a>
     <a href="#">Đề thi thử 2023 THPT Quốc gia (cả nước)</a>
     <a href="#">Đề thi ĐGNL, ĐGTD năm 2023</a>
   </div>
   </div>

 </div>
</div>
</div>


`;
    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });
    var myLandbot;
    function initLandbot() {
      if (!myLandbot) {
        var s = document.createElement("script");
        s.type = "text/javascript";
        s.async = true;
        s.addEventListener("load", function () {
          var myLandbot = new Landbot.Livechat({
            configUrl:
              "https://storage.googleapis.com/landbot.online/v3/H-2097951-OQDFEAWR2H9I466A/index.json",
          });
        });
        s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.js";
        var x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      }
    }
    const buttonElement = document.querySelector("#teacher-docs-button");
    buttonElement.addEventListener("click", function () {
      // Define the URL you want to open in a new tab
      var url = "https://tailieugiaovien.com.vn/";

      // Open the URL in a new tab
      window.open(url, "_blank");
    });

    class Utility {
      static focusOnElement(selector, callback) {
        const element = document.querySelector(selector);
        if (element) {
          element.focus();
          if (callback && typeof callback === "function") {
            callback();
          }
        }
      }
    }

    // Using the Utility class to automatically focus on #custom-search-input and providing a callback
    window.onload = function () {
      Utility.focusOnElement("#custom-search-input", function () {
        // Callback function, add your code here
        console.log("Element focused!");
        // Add more code here if needed
      });
    };
  }
}

document.addEventListener("DOMContentLoaded", function () {
  var accordions = document.querySelectorAll(".accordion");

  for (var i = 0; i < accordions.length; i++) {
    accordions[i].addEventListener("click", function () {
      this.classList.toggle("active");

      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }
});
// JavaScript to handle the button click event
customElements.define("my-navbar", MyNavbar);

const buttonElement = document.querySelector("#teacher-docs-button");
buttonElement.addEventListener("click", function () {
  // Define the URL you want to open in a new tab
  var url = "https://tailieugiaovien.com.vn/";

  // Open the URL in a new tab
  window.open(url, "_blank");
});
function generateAdHTML(ad) {
  return `
    <div class="ad-item">
      <img src="${ad.image}" alt="Quảng cáo">
      
      <video controls loop autoplay muted>
        <source src="${ad.video}" type="video/mp4">
      </video>
      
      <a href="${ad.link}">Xem chi tiết</a>
    </div>
  `;
}

class Utility {
  static focusOnElement(selector, callback) {
    const element = document.querySelector(selector);
    if (element) {
      element.focus();
      if (callback && typeof callback === "function") {
        callback();
      }
    }
  }
}

// Using the Utility class to automatically focus on #custom-search-input and providing a callback
window.onload = function () {
  Utility.focusOnElement("#custom-search-input", function () {
    // Callback function, add your code here
    console.log("Element focused!");
    // Add more code here if needed
  });
};
