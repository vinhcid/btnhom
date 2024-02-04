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
<a href="../index.html"><img src="../images/anhTrangChu.png" width="40px" height="41px" alt="Icon"
    class="menu-icon" /></a>
<div class="dropdown">
  <a href="#">LỚP 1</a>
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
        <a href="../lop4/gt4.html">Giải Toán lớp 4</a>
        <a href="../lop4/gvbtt4.html">Giải Vở bài tập Toán lớp 4</a>
        <a href="../lop4/gtv4.html">Giải Tiếng Việt lớp 4</a>
        <a href="../lop4/gvbttv4.html">Giải Vở bài tập Tiếng Việt lớp 4</a>
        <a href="../lop4/gdd4.html">Giải sgk Đạo đức lớp 4</a>
        <a href="../lop4/gkh4.html">Giải Khoa học lớp 4</a>
        <a href="../lop4/glsdl4.html">Giải Lịch Sử và Địa Lí lớp 4</a>
        <a href="../lop4/ghdtn4.html">Giải Hoạt động trải nghiệm lớp 4</a>
        <a href="../lop4/gth4.html">Giải Tin học lớp 4</a>
        <a href="../lop4/gcn4.html">Giải Công nghệ lớp 4</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 4 - CHÂN TRỜI SÁNG TẠO</a>
      <div class="content">
        <a href="../lop4/gt4 st.html">Giải Toán lớp 4</a>
        <a href="../lop4/gvbtt4 st.html">Giải Vở bài tập Toán lớp 4</a>
        <a href="../lop4/gtv4 st.html">Giải Tiếng Việt lớp 4</a>
        <a href="../lop4/gvbttv4 st.html">Giải Vở bài tập Tiếng Việt lớp 4</a>
        <a href="../lop4/gdd4 st.html">Giải sgk Đạo đức lớp 4</a>
        <a href="../lop4/gkh4 st.html">Giải Khoa học lớp 4</a>
        <a href="../lop4/glsdl4 st.html">Giải Lịch Sử và Địa Lí lớp 4</a>
        <a href="../lop4/ghdtn4 st.html">Giải Hoạt động trải nghiệm lớp 4</a>
        <a href="../lop4/gth4 st.html">Giải Tin học lớp 4</a>
        <a href="../lop4/gcn4 st.html">Giải Công nghệ lớp 4</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 4 - CÁNH DIỀU</a>
      <div class="content">
        <a href="../lop4/gt4 cd.html">Giải Toán lớp 4</a>
        <a href="../lop4/gvbtt4 cd.html">Giải Vở bài tập Toán lớp 4</a>
        <a href="../lop4/gtv4 cd.html">Giải Tiếng Việt lớp 4</a>
        <a href="../lop4/gvbttv4 cd.html">Giải Vở bài tập Tiếng Việt lớp 4</a>
        <a href="../lop4/gdd4 cd.html">Giải sgk Đạo đức lớp 4</a>
        <a href="../lop4/gkh4 cd.html">Giải Khoa học lớp 4</a>
        <a href="../lop4/glsdl4 cd.html">Giải Lịch Sử và Địa Lí lớp 4</a>
        <a href="../lop4/ghdtn4 cd.html">Giải Hoạt động trải nghiệm lớp 4</a>
        <a href="../lop4/gth4 cd.html">Giải Tin học lớp 4</a>
        <a href="../lop4/gcn4 cd.html">Giải Công nghệ lớp 4</a>
      </div>
    </div>


    <div class="columnt">
      <a class="not-hover" href="#">TIẾNG ANH</a>
      <div class="content">
        <a href="../lop4/gta4 gs.html">Giải Tiếng Anh lớp 4 Global Success</a>
        <a href="../lop4/gta4 ss.html">Giải Tiếng Anh lớp 4 Smart Start</a>
        <a href="../lop4/gta4 ff.html">Giải Tiếng Anh lớp 4 Family and Friends</a>
        <a href="../lop4/gta4 eow.html">Giải Tiếng Anh lớp 4 Explore Our World</a><br>
      </div>
      <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop4/pp4.html">Giáo án, Bài giảng powerpoint lớp 4</a>
        <a href="../lop4/de thi4.html">Đề thi Học kì lớp 4</a>
        <a href="../lop4/btbt toan4.html">Bài tập cuối tuần Toán lớp 4</a>
        <a href="../lop4/btct tv4.html">Bài tập cuối tuần Tiếng Việt lớp 4</a>
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
        <a href="../lop5/gtv5.html">Giải Tiếng Việt lớp 5</a>
        <a href="../lop5/gvbttv5.html">Giải Vở bài tập Tiếng Việt 5</a>
        <a href="../lop5/vm5.html">Văn mẫu lớp 5</a>
        <a href="../lop5/gt5.html">Giải Toán lớp 5</a>
      </div>
    </div>

    <div class="columnt">
      <div class="content">
        <a href="../lop5/gvbtt5.html">Giải Vở bài tập Toán 5</a>
        <a href="../lop5/gta5.html">Giải Tiếng Anh lóp 5</a>
        <a href="../lop5/gkh5.html">Giải Khoa học 5</a>
        <a href="../lop5/gls5.html">Giải Lịch Sử 5</a>
      </div>
    </div>

    <div class="columnt">
      <div class="content">
        <a href="../lop5/gdl5.html">Giải Địa Lí 5</a>
        <a href="../lop5/gdd5.html">Giải Đạo Đức 5</a>
        <a href="../lop5/gth5.html">Giải Tin Học 5</a>
      </div>
    </div>

    <div class="columnt">
      <a class="not-hover" href="#">SÁCH/VỞ BÀI TẬP</a>
      <div class="content">
        <a href="../lop5/gsvbt.html">Giải SBT & VBT lớp 5 (các môn)</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#" class="not-hover">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop5/pp5.html">Giáo án, Bài giảng powerpoint lớp 5</a>
        <a href="../lop5/de thi5.html">Đề thi Giữa kì, Cuối kì lớp 5</a>
        <a href="../lop5/btct t5.html">Bài tập cuối tuần Tiếng Việt lớp 5</a>
        <a href="../lop5/btct tv5.html">Bài tập cuối tuần Toán lớp 5</a>
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
        <a href="../lop6/svhn6 kntt.html">Soạn Văn 6 (hay nhất)</a>
        <a href="../lop6/svnn6 kntt.html">Soạn Văn 6 (ngắn nhất)</a>
        <a href="../lop6/gt6 kntt.html">Giải Toán lớp 6</a>
        <a href="../lop6/gkhtn6 kntt.html">Giải Khoa học tự nhiên 6</a>
        <a href="../lop6/gls6 kntt.html">Giải Lịch sử 6</a>
        <a href="../lop6/gdl6 kntt.html">Giải Địa Lí 6</a>
        <a href="../lop6/ggdcd6 kntt.html">Giải GDCD 6</a>
        <a href="../lop6/ghdtn6 kntt.html">Giải Hoạt động trải nghiệm 6</a>
        <a href="../lop6/gth6 kntt.html">Giải Tin học 6</a>
        <a href="../lop6/gcn6 kntt.html">Giải Công nghệ 6</a>
        <a href="../lop6/gan6 kntt.html">Giải Âm nhạc 6</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 6 - CHÂN TRỜI SÁNG TẠO</a>
      <div class="content"></div>
      <a href="../lop6/svhn6 st.html">Soạn Văn 6 (hay nhất)</a>
      <a href="../lop6/svnn6 st.html">Soạn Văn 6 (ngắn nhất)</a>
      <a href="../lop6/gt6 kntt.html st.html">Giải Toán lớp 6</a>
      <a href="../lop6/gkhtn6 st.html">Giải Khoa học tự nhiên 6</a>
      <a href="../lop6/gls6 st.html">Giải Lịch sử 6</a>
      <a href="../lop6/gdl6st.html">Giải Địa Lí 6</a>
      <a href="../lop6/ggdcd6 st.html">Giải GDCD 6</a>
      <a href="../lop6/ghdtn6 st.html">Giải Hoạt động trải nghiệm 6</a>
      <a href="../lop6/gth6 st.html">Giải Tin học 6</a>
      <a href="../lop6/gcn6 st.html">Giải Công nghệ 6</a>
      <a href="../lop6/gan6 st.html">Giải Âm nhạc 6</a>
    </div>

    <div class="columnt">
      <a href="#">LỚP 6 - CÁNH DIỀU</a>
      <div class="content">
        <a href="../lop6/svhn6 cd.html">Soạn Văn 6 (hay nhất)</a>
        <a href="../lop6/svnn6 cd.html">Soạn Văn 6 (ngắn nhất)</a>
        <a href="../lop6/gt6 cd.html">Giải Toán lớp 6</a>
        <a href="../lop6/gkhtn6 cd.html">Giải Khoa học tự nhiên 6</a>
        <a href="../lop6/gls6 cd.html">Giải Lịch sử 6</a>
        <a href="../lop6/gdl6 cd.html">Giải Địa Lí 6</a>
        <a href="../lop6/ggdcd6 cd.html">Giải GDCD 6</a>
        <a href="../lop6/ghdtn6 cd.html">Giải Hoạt động trải nghiệm 6</a>
        <a href="../lop6/gth6 cd.html">Giải Tin học 6</a>
        <a href="../lop6/gcn6 cd.html">Giải Công nghệ 6</a>
        <a href="../lop6/gan6 cd.html">Giải Âm nhạc 6</a>
      </div>
    </div>


    <div class="columnt">
      <a class="not-hover" href="#">TIẾNG ANH</a>
      <div class="content">
        <a href="../lop6/gta6 gs.html">Giải Tiếng Anh 6 Global Success</a>
        <a href="../lop6/gta6 sw.html">Giải Tiếng Anh 6 Smart World</a>
        <a href="../lop6/gta6 fp.html">Giải Tiếng Anh 6 Friends plus</a>
        <a href="../lop6/gta6 ee.html">Giải Tiếng Anh 6 Explore English</a><br>
      </div>
      <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop6/pp6.html">Giáo án, Bài giảng powerpoint lớp 6</a>
        <a href="../lop6/de thi6 .html">Đề thi Giữa kì, Cuối kì lớp 6</a>
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
        <a href="../lop7/svhn7 kntt.html">Soạn Văn 7 (hay nhất)</a>
        <a href="../lop7/svnn7 kntt.html">Soạn Văn 7 (ngắn nhất)</a>
        <a href="../lop7/gt7 kntt.html">Giải Toán lớp 7</a>
        <a href="../lop7/gkhtn7 kntt.html">Giải Khoa học tự nhiên 7</a>
        <a href="../lop7/gls7 kntt.html">Giải Lịch sử 7</a>
        <a href="../lop7/gdl7 kntt.html">Giải Địa Lí 7</a>
        <a href="../lop7/ggdcd7 kntt.html">Giải GDCD 7</a>
        <a href="../lop7/ghdtn7 kntt.html">Giải Hoạt động trải nghiệm 7</a>
        <a href="../lop7/gth7 kntt.html">Giải Tin học 7</a>
        <a href="../lop7/gcn7 kntt.html">Giải Công nghệ 7</a>
        <a href="../lop7/gan7 kntt.html">Giải Âm nhạc 7</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 7 - CHÂN TRỜI SÁNG TẠO</a>
      <div class="content">
        <a href="../lop7/svhn7 st.html">Soạn Văn 7 (hay nhất)</a>
        <a href="../lop7/svnn7 st.html">Soạn Văn 7 (ngắn nhất)</a>
        <a href="../lop7/gt7 st.html">Giải Toán lớp 7</a>
        <a href="../lop7/gkhtn7 st.html">Giải Khoa học tự nhiên 7</a>
        <a href="../lop7/gls7 st.html">Giải Lịch sử 7</a>
        <a href="../lop7/gdl7 st.html">Giải Địa Lí 7</a>
        <a href="../lop7/ggdcd7 st.html">Giải GDCD 7</a>
        <a href="../lop7/ghdtn7 st.html">Giải Hoạt động trải nghiệm 7</a>
        <a href="../lop7/gth7 st.html">Giải Tin học 7</a>
        <a href="../lop7/gcn7 st.html">Giải Công nghệ 7</a>
        <a href="../lop7/ggdtc7 st.html">Giải Giáo dục thể chất lớp 7</a>
        <a href="../lop7/gan7 st.html">Giải Âm nhạc 7</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 7 - CÁNH DIỀU</a>
      <div class="content">
        <a href="../lop7/svhn7 cd.html">Soạn Văn 7 (hay nhất)</a>
        <a href="../lop7/svnn7 cd.html">Soạn Văn 7 (ngắn nhất)</a>
        <a href="../lop7/gt7 cd.html">Giải Toán lớp 7</a>
        <a href="../lop7/gkhtn7 cd.html">Giải Khoa học tự nhiên 7</a>
        <a href="../lop7/gls7 cd.html">Giải Lịch sử 7</a>
        <a href="../lop7/gdl7 cd.html">Giải Địa Lí 7</a>
        <a href="../lop7/ggdcd7 cd.html">Giải GDCD 7</a>
        <a href="../lop7/ghdtn7 cd.html">Giải Hoạt động trải nghiệm 7</a>
        <a href="../lop7/gth7 cd.html">Giải Tin học 7</a>
        <a href="../lop7/gcn7 cd.html">Giải Công nghệ 7</a>
        <a href="../lop7/ggdtc7 cd.html">Giải Giáo dục thể chất lớp 7</a>
        <a href="../lop7/gan7 cd.html">Giải Âm nhạc 7</a>


      </div>
    </div>

    <div class="columnt">
      <a class="not-hover" href="#">TIẾNG ANH</a>
      <div class="content">
        <a href="../lop7/gta7 gs.html">Giải Tiếng Anh 7 Global Success</a>
        <a href="../lop7/gta7 sw.html">Giải Tiếng Anh 7 Smart World</a>
        <a href="../lop7/gta7 fp.html">Giải Tiếng Anh 7 Friends plus</a>
        <a href="../lop7/gta7 ee.html">Giải Tiếng Anh 7 Explore English</a><br>
      </div>
      <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop7/pp7.html">Giáo án, Bài giảng powerpoint lớp 7</a>
        <a href="../lop7/de thi7.html">Đề thi Giữa kì, Cuối kì lớp 7</a>
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
        <a href="../lop8/svhn8 kntt.html">Soạn Văn 8 (hay nhất)</a>
        <a href="../lop8/svnn8 kntt.html">Soạn Văn 8 (ngắn nhất)</a>
        <a href="../lop8/gt8 kntt.html">Giải Toán lớp 8</a>
        <a href="../lop8/gkhtn8 kntt.html">Giải Khoa học tự nhiên 8</a>
        <a href="../lop8/gls8 kntt.html">Giải Lịch sử 8</a>
        <a href="../lop8/gdl8 kntt.html">Giải Địa Lí 8</a>
        <a href="../lop8/ggdcd8 kntt.html">Giải GDCD 8</a>
        <a href="../lop8/ghdtn8 kntt.html">Giải Hoạt động trải nghiệm 8</a>
        <a href="../lop8/gth8 kntt.html">Giải Tin học 8</a>
        <a href="../lop8/gcn8 kntt.html">Giải Công nghệ 8</a>
        <a href="../lop8/gan8 kntt.html">Giải Âm nhạc 8</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 8 - CHÂN TRỜI SÁNG TẠO</a>
      <div class="content">
        <a href="../lop8/svhn8 st.html">Soạn Văn 8 (hay nhất)</a>
        <a href="../lop8/svnn8 st.html">Soạn Văn 8 (ngắn nhất)</a>
        <a href="../lop8/gt8 st.html">Giải Toán lớp 8</a>
        <a href="../lop8/gkhtn8 st.html">Giải Khoa học tự nhiên 8</a>
        <a href="../lop8/gls8 st.html">Giải Lịch sử 8</a>
        <a href="../lop8/gdl8 st.html">Giải Địa Lí 8</a>
        <a href="../lop8/ggdcd8 st.html">Giải GDCD 8</a>
        <a href="../lop8/ghdtn8 st.html">Giải Hoạt động trải nghiệm 8</a>
        <a href="../lop8/gth8 st.html">Giải Tin học 8</a>
        <a href="../lop8/gcn8 st.html">Giải Công nghệ 8</a>
        <a href="../lop8/gan8 st.html">Giải Âm nhạc 8</a>
      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 8 - CÁNH DIỀU</a>
      <div class="content">
        <a href="../lop8/svhn8 cd.html">Soạn Văn 8 (hay nhất)</a>
        <a href="../lop8/svnn8 cd.html">Soạn Văn 8 (ngắn nhất)</a>
        <a href="../lop8/gt8 cd.html">Giải Toán lớp 8</a>
        <a href="../lop8/gkhtn8 cd.html">Giải Khoa học tự nhiên 8</a>
        <a href="../lop8/gls8 cd.html">Giải Lịch sử 8</a>
        <a href="../lop8/gdl8 cd.html">Giải Địa Lí 8</a>
        <a href="../lop8/ggdcd88 cd.html">Giải GDCD 8</a>
        <a href="../lop8/ghdtn8 cd.html">Giải Hoạt động trải nghiệm 8</a>
        <a href="../lop8/gth8 cd.html">Giải Tin học 8</a>
        <a href="../lop8/gcn8 cd.html">Giải Công nghệ 8</a>
        <a href="../lop8/gan8 cd.html">Giải Âm nhạc 8</a>

      </div>
    </div>

    <div class="columnt">
      <a class="not-hover" href="#">TIẾNG ANH</a>
      <div class="content">
        <a href="../lop8/gta8 gs.html">Giải Tiếng Anh 8 Global Success</a>
        <a href="../lop8/gta8 sw.html">Giải Tiếng Anh 8 Smart World</a>
        <a href="../lop8/gta8 fp.html">Giải Tiếng Anh 8 Friends plus</a><br>
      </div>
      <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop8/pp8.html">Giáo án, Bài giảng powerpoint lớp 8</a>
        <a href="../lop8/de thi8.html">Đề thi Giữa kì, Cuối kì lớp 8</a>
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
        <a href="../lop9/svhn9.hmtl">Soạn Văn 9 (hay nhất)</a>
        <a href="../lop9/svnn9.html">Soạn Văn 9 (ngắn nhất)</a>
        <a href="../lop9/svsn9.html">Soạn Văn 9 (siêu ngắn)</a>
        <a href="../lop9/svcn9.html">Soạn Văn 9 (cực ngắn)</a>
        <a href="../lop9/vm9.html">Văn mẫu lớp 9</a>
        <a href="../lop9/gt9.html">Giải Toán 9</a>
      </div>
    </div>

    <div class="columnt">
      <div class="content">
        <a href="../lop9/gvl9.html">Giải Vật Lí 9</a>
        <a href="../lop9/gh9.html">Giải Hóa 9</a>
        <a href="../lop9/gs9.html">Giải Sinh 9</a>
        <a href="../lop9/gdl9.html">Giải Địa Lí 9</a>
        <a href="../lop9/gta9.html">Giải Tiếng Anh 9</a>

      </div>
    </div>

    <div class="columnt">
      <div class="content">
        <a href="../lop9/gls9.html">Giải Lịch sử 9</a>
        <a href="../lop9/gth9.html">Giải Tin học 9</a>
        <a href="../lop9/ggdcd9.html">Giải GDCD 9</a>
        <a href="../lop9/gcn9.html">Giải Công nghệ 9</a>
        <a href="../lop9/gan9.html">Giải Âm nhạc 9</a>
        <a href="../lop9/gmt9.html">Giải Mỹ thuật 9</a>
      </div>
    </div>

    <div class="columnt">
      <a class="not-hover" href="#">SÁCH VỞ BÀI TẬP</a>
      <div class="content">
        <a href="../lop9/gsbt9.html">Giải SBT lớp 9 (các môn)</a><br>
        <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
        <a href="../lop9/pp9.html">Giáo án, Bài giảng powerpoint lớp 9</a>
        <a href="../lop9/de thi9.html">Đề thi Giữa kì, Cuối kì lớp 9</a>
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
        <a href="../lop10/svhn.html">Soạn Văn 10 (hay nhất)</a>
        <a href="../lop10/svnn.html">Soạn Văn 10 (ngắn nhất)</a>
        <a href="../lop10/gt.html">Giải Toán lớp 10</a>
        <a href="../lop10/gls.html">Giải Lịch sử 10</a>
        <a href="../lop10/gdl.html">Giải Địa Lí 10</a>
        <a href="../lop10/gsh.html">Giải Sinh học 10</a>
        <a href="../lop10/gth.html">Giải Tin học 10</a>
        <a href="../lop10/gcn.html">Giải Công nghệ 10</a>

      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 10 - CHÂN TRỜI SÁNG TẠO</a>
      <div class="content">
        <a href="../lop10/svhn st.html">Soạn Văn 10 (hay nhất)</a>
        <a href="../lop10/svnn st.html">Soạn Văn 10 (ngắn nhất)</a>
        <a href="../lop10/gt st.html">Giải Toán lớp 10</a>
        <a href="../lop10/gls st.html">Giải Lịch sử 10</a>
        <a href="../lop10/gdl st.html">Giải Địa Lí 10</a>
        <a href="../lop10/gsh st.html">Giải Sinh học 10</a>
        <a href="../lop10/gth st.html">Giải Tin học 10</a>
        <a href="../lop10/gcn st.html">Giải Công nghệ 10</a>


      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 10 - CÁNH DIỀU</a>
      <div class="content">
        <a href="../lop10/svhn cd.html">Soạn Văn 10 (hay nhất)</a>
        <a href="../lop10/svnn cd.html">Soạn Văn 10 (ngắn nhất)</a>
        <a href="../lop10/gt cd.html">Giải Toán lớp 10</a>
        <a href="../lop10/gls cd.html">Giải Lịch sử 10</a>
        <a href="../lop10/gdl cd.html">Giải Địa Lí 10</a>
        <a href="../lop10/gsh cd.html">Giải Sinh học 10</a>
        <a href="../lop10/gth cd.html">Giải Tin học 10</a>
        <a href="../lop10/gcn cd.html">Giải Công nghệ 10</a>


      </div>
    </div>

    <div class="columnt">
      <a class="not-hover" href="#">TIẾNG ANH</a>
      <div class="content">
        <a href="../lop10/gta10 gs.html">Giải Tiếng Anh 10 Global Success</a>
        <a href="../lop10/gta10 sw.html">Giải Tiếng Anh 10 Smart World</a>
        <a href="../lop10/gta10 fg.html">Giải Tiếng Anh 10 Friends Global</a>
        <a href="../lop10/gta10 enw.html">Giải Tiếng Anh 10 Explore New Worlds</a><br>
      </div>
      <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop10/pp10.html">Giáo án, Bài giảng powerpoint lớp 10</a>
        <a href="../lop10/de thi10.html">Đề thi giữa kì, Cuối kì lớp 10</a>
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
        <a href="../lop11/svhn11 kntt.html">Soạn Văn 11 (hay nhất)</a>
        <a href="../lop11/svnn11 kntt.html">Soạn Văn 11 (ngắn nhất)</a>
        <a href="../lop11/gt11 kntt.html">Giải Toán lớp 11</a>
        <a href="../lop11/gdl11 kntt.html">Giải Địa Lí 11</a>
        <a href="../lop11/gsh11 kntt.html">Giải Sinh học 11</a>
        <a href="../lop11/gth11 kntt.html">Giải Tin học 11</a>
        <a href="../lop11/gcn11 kntt.html">Giải Công nghệ 11</a>

      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 11 - CHÂN TRỜI SÁNG TẠO</a>
      <div class="content">
        <a href="../lop11/svhn11 st.html">Soạn Văn 11 (hay nhất)</a>
        <a href="../lop11/svnn11 st.html">Soạn Văn 11 (ngắn nhất)</a>
        <a href="../lop11/gt11 st.html">Giải Toán lớp 11</a>
        <a href="../lop11/gls11 st.html">Giải Lịch sử 11</a>
        <a href="../lop11/gdl11 st.html">Giải Địa Lí 11</a>
        <a href="../lop11/gsh11 st.html">Giải Sinh học 11</a>
        <a href="../lop11/gth11 st.html">Giải Tin học 11</a>
        <a href="../lop11/gcn11 st.html">Giải Công nghệ 11</a>

      </div>
    </div>

    <div class="columnt">
      <a href="#">LỚP 11 - CÁNH DIỀU</a>
      <div class="content">
        <a href="../lop11/svhn11 cd.html">Soạn Văn 11 (hay nhất)</a>
        <a href="../lop11/svnn11 cd.html">Soạn Văn 11 (ngắn nhất)</a>
        <a href="../lop11/gt11 cd.html">Giải Toán lớp 11</a>
        <a href="../lop11/gls11 cd.html">Giải Lịch sử 11</a>
        <a href="../lop11/gdl11 cd.html">Giải Địa Lí 11</a>
        <a href="../lop11/gsh11 cd.html">Giải Sinh học 11</a>
        <a href="../lop11/gth11 cd.html">Giải Tin học 11</a>
        <a href="../lop11/gcn11 cd.html">Giải Công nghệ 11</a>


      </div>
    </div>

    <div class="columnt">
      <a class="not-hover" href="#">TIẾNG ANH</a>
      <div class="content">
        <a href="../lop11/gta11 gs.html">Giải Tiếng Anh 11 Global Success</a>
        <a href="../lop11/gta11 sw.html">Giải Tiếng Anh 11 Smart World</a>
        <a href="../lop11/gta11 fg.html">Giải Tiếng Anh 11 Friends Global</a>
      </div>
      <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop11/pp11.html">Giáo án, Bài giảng powerpoint lớp 11</a>
        <a href="../lop11/de thi11.html">Đề thi giữa kì, Cuối kì lớp 11</a>
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
        <a href="../lop12/svhn.html">Soạn Văn 12 (hay nhất)</a>
        <a href="../lop12/svnn.html">Soạn Văn 12 (ngắn nhất)</a>
        <a href="../lop12/svsn.html">Soạn Văn 12 (siêu ngắn)</a>
        <a href="../lop12/svcn.html">Soạn Văn 12 (cực ngắn)</a>
        <a href="../lop12/vm.html">Văn mẫu lớp 12</a>
        <a href="../lop12/gt.html">Giải Toán 12</a>
        <a href="../lop12/gtnc.html">Giải Toán 12 Nâng cao</a>
      </div>
    </div>

    <div class="columnt">
      <div class="content">
        <a href="../lop12/gvl.html">Giải Vật Lí 12</a>
        <a href="../lop12/gvlnc.html">Giải Vật Lí 12 Nâng cao</a>
        <a href="../lop12/gh.html">Giải Hóa 12</a>
        <a href="../lop12/ghnc.html">Giải Hóa 12 nâng cao</a>
        <a href="../lop12/gs.html">Giải Sinh 12</a>
        <a href="../lop12/gsnc.html">Giải Sinh 12 nâng cao</a>
        <a href="../lop12/gdl.html">Giải Địa Lí 12</a>
      </div>
    </div>

    <div class="columnt">
      <div class="content">
        <a href="../lop12/gta.html">Giải Tiếng Anh 12</a>
        <a href="../lop12/gtam.html">Giải Tiếng Anh 12 mới</a>
        <a href="../lop12/gls.html">Giải Lịch sử 12</a>
        <a href="../lop12/gth.html">Giải Tin học 12</a>
        <a href="../lop12/ggdcd.html">Giải GDCD 12</a>
        <a href="../lop12/gcn.html">Giải Công nghệ 12</a>
        <a href="../lop12/ggdqp.html">Giải Giáo dục quốc phòng 12</a>
      </div>
    </div>

    <div class="columnt">
      <a class="not-hover" href="#">SÁCH VỞ BÀI TẬP</a>
      <div class="content">
        <a href="../lop12/gsbt12.html">Giải SBT lớp 12 (các môn)</a><br>
      </div>
      <a class="not-hover" href="#">TÀI LIỆU GIÁO VIÊN</a>
      <div class="content">
        <a href="../lop12/gapp12.html">Giáo án, Bài giảng powerpoint lớp 12</a>
        <a href="../lop12/dtgk12.html">Đề thi Giữa kì, Cuối kì lớp 12</a>
        <a href="../lop12/dot12.html">Đề ôn thi THPTQG (các môn)</a>
        <a href="../lop12/dtt12.html">Đề thi thử 2023 THPTQG (cả nước)</a>
        <a href="../lop12/dtdgnl12.html">Đề thi ĐGNL, ĐGTD năm 2023</a>
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
