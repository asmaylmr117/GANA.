import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
const surahNames = [
  "الفاتحة", "البقرة", "آل عمران", "النساء", "المائدة", "الأنعام", "الأعراف", "الأنفال", "التوبة", "يونس",
  "هود", "يوسف", "الرعد", "إبراهيم", "الحجر", "النحل", "الإسراء", "الكهف", "مريم", "طه",
  "الأنبياء", "الحج", "المؤمنون", "النور", "الفرقان", "الشعراء", "النمل", "القصص", "العنكبوت", "الروم",
  "لقمان", "السجدة", "الأحزاب", "سبأ", "فاطر", "يس", "الصافات", "ص", "الزمر", "غافر",
  "فصلت", "الشورى", "الزخرف", "الدخان", "الجاثية", "الأحقاف", "محمد", "الفتح", "الحجرات", "ق",
  "الذاريات", "الطور", "النجم", "القمر", "الرحمن", "الواقعة", "الحديد", "المجادلة", "الحشر", "الممتحنة",
  "الصف", "الجمعة", "المنافقون", "التغابن", "الطلاق", "التحريم", "الملك", "القلم", "الحاقة", "المعارج",
  "نوح", "الجن", "المزمل", "المدثر", "القيامة", "الإنسان", "المرسلات", "النبأ", "النازعات", "عبس",
  "التكوير", "الإنفطار", "المطففين", "الإنشقاق", "البروج", "الطارق", "الأعلى", "الغاشية", "الفجر", "البلد",
  "الشمس", "الليل", "الضحى", "الشرح", "التين", "العلق", "القدر", "البينة", "الزلزلة", "العاديات",
  "القارعة", "التكاثر", "العصر", "الهمزة", "الفيل", "قريش", "الماعون", "الكوثر", "الكافرون", "النصر",
  "المسد", "الإخلاص", "الفلق", "الناس"
];

// Adding URLs for the PDF files of each Surah
const surahPdfs = [
  "https://drive.google.com/file/d/12j2TJsr2SZbEVqDeL4_XwYNR5TkvnJ8C/view?usp=drivesdk", "https://drive.google.com/file/d/1vCoNnrE0ZcWBcMB2uKfxOTok9XwGXYtA/view?usp=drivesdk", "https://drive.google.com/file/d/12lwrwyhZUpGvLYwNXAqLL-yUoHPLYrU0/view?usp=drivesdk", "https://drive.google.com/file/d/1yYYXKWkPqjIA1-EnOTJxzI6LLVeE4dNM/view?usp=drivesdk", "https://drive.google.com/file/d/1fbtgf7yd4nEnWyl7zrwlS897ZG37IKqh/view?usp=drivesdk",
  "https://drive.google.com/file/d/12yq3MFKnoiX2gCMI9yqcSTQnGg751dtj/view?usp=drivesdk", "https://drive.google.com/file/d/16FmoNhwLsQxLxhyDAHPN8qK3Q4zDBsCq/view?usp=drivesdk", "https://drive.google.com/file/d/1KkxRHT79N_nZtobvQCNRIjYFeBIle45x/view?usp=drivesdk", "https://drive.google.com/file/d/1w76RGvbpTLbEooRjeu0_19815GnMaav9/view?usp=drivesdk", "https://drive.google.com/file/d/1c6JsqL-_s6a9eQ8tvZ9iC5CA7f4dI5fi/view?usp=drivesdk",
  "https://drive.google.com/file/d/1KaHXeUnMbRIWB-znZ_iFYEvzGE38z3eW/view?usp=drivesdk", "https://drive.google.com/file/d/1eJWZW0qfjKl8vkK71AU-2nvVs1Ye7CzJ/view?usp=drivesdk", "https://drive.google.com/file/d/1TJ4Q8CGpTaUSrU3BUIK1bdEAM9Y8NajK/view?usp=drivesdk", "https://drive.google.com/file/d/1fRoTIDO7x9wfGBff7DJbEaoj3T6IkiNv/view?usp=drivesdk", "https://drive.google.com/file/d/1Eh9rLLf77e7mm4l0zgLRQWZveLVZOvAn/view?usp=drivesdk",
  "https://drive.google.com/file/d/1bCUVt-dQJF9sraahJE67YSd1K1Lvc2kP/view?usp=drivesdk", "https://drive.google.com/file/d/1xak0PilyYL2vHKh4OOmRF_3JZToGs9Rw/view?usp=drivesdk", "https://drive.google.com/file/d/1HZ7J9ksATG6UwLd7ccYXqyJxabo7WyR7/view?usp=drivesdk", "https://drive.google.com/file/d/1ztS9_QMrlcKbRAECcESzeKflIIOUtvrN/view?usp=drivesdk", "https://drive.google.com/file/d/1Imay53zQ0Nv27EKJwZd3FtmckX4hxhrq/view?usp=drivesdk",
  "https://drive.google.com/file/d/1pqtUYS3zVrgC5xP2C3UndRsDVxJZ0PcL/view?usp=drivesdk", "https://drive.google.com/file/d/1fcjQR_qOrqR3rjOQFw4dFuCzO5-FhtB_/view?usp=drivesdk", "https://drive.google.com/file/d/1K3JkpWC7rTzlgnyA8pc_hMzK8Q9Jv2vD/view?usp=drivesdk", "https://drive.google.com/file/d/1cN8bJj5LuDHS83mrMdjjOhMDhMP-z27P/view?usp=drivesdk", "https://drive.google.com/file/d/1LytOgN_r1I_blzKlTNuy2bMgzNcej_7Y/view?usp=drivesdk",
  "https://drive.google.com/file/d/12R4LMBKhJ77R4okVpNzYctkYCdPvbLzd/view?usp=drivesdk", "https://drive.google.com/file/d/16sluNU_r1z6d2WZVSPguaCwBD6mIbs_k/view?usp=drivesdk", "https://drive.google.com/file/d/1H3YkORKFx75rHTIbAV-GjzqkC8Nrokn-/view?usp=drivesdk", "https://drive.google.com/file/d/153A-_dEQGOIStT87CQfkLwsoT95y3jqB/view?usp=drivesdk", "https://drive.google.com/file/d/1ZkdoNLBoSwg894p1KY9WE-MHoP9FzqXQ/view?usp=drivesdk",
  "https://drive.google.com/file/d/12Z2P6jzBeUUtnwtvyAZfBlnTi78Ed49V/view?usp=drivesdk", "https://drive.google.com/file/d/1WcAE9c-k-1uoIMcZ23GHeBOyI2QWZeJx/view?usp=drivesdk", "https://drive.google.com/file/d/1q1T-oIZ005Bep4XHUiSy8N34EpDgWzfq/view?usp=drivesdk", "https://drive.google.com/file/d/1_1fmByKb4aJoucu2o6G6YWed8oWBQnrX/view?usp=drivesdk", "https://drive.google.com/file/d/13tnthcfKyKOrZmjwRm0jeCHJWVMbg-fE/view?usp=drivesdk",
  "https://drive.google.com/file/d/1qKKpM-BEQ_OSFQcvMzUV_Wp2JedELC3r/view?usp=drivesdk", "https://drive.google.com/file/d/1JGpUjbrZSr87wVg6OFt_g7tdUkyoaDzt/view?usp=drivesdk", "https://drive.google.com/file/d/1aui1sP9EiyIOtnegcLf741p1sukavokP/view?usp=drivesdk", "https://drive.google.com/file/d/1m8wHw5ra_LRBogI45rFSsKhloYEcUMQ2/view?usp=drivesdk", "https://drive.google.com/file/d/17R_ajo33B3ywW1v5gKhiRsMXQsu-8BjD/view?usp=drivesdk",
  "https://drive.google.com/file/d/1Wv0xZqlBh6asKLx_MpszBaEfhXQjcM9Z/view?usp=drivesdk", "https://drive.google.com/file/d/1XslVWwGeYKD-vDMXtgOPZNYX1qBQQ18k/view?usp=drivesdk", "https://drive.google.com/file/d/1OguoOwn3NwpzyW1XD_pwpFmxU8ps2Q2s/view?usp=drivesdk", "https://drive.google.com/file/d/1mVcaIXpoZWAofBWUStsiTaGrzTLkkOos/view?usp=drivesdk", "https://drive.google.com/file/d/1Ue-zyM2-Q7uSUwQGsciBGGPrb6VaRDQz/view?usp=drivesdk",
  "https://drive.google.com/file/d/10MNt0BTCEcj9n_5SnXvv4i_jJHnwkmk8/view?usp=drivesdk", "https://drive.google.com/file/d/1o-5l1TybhAsjelP52VcVg_ZZrqCaDayA/view?usp=drivesdk", "https://drive.google.com/file/d/172JAnfP1EE7xRhyapqLfQ_najp3TiMGc/view?usp=drivesdk", "https://drive.google.com/file/d/1hIGfhPJnVtmHq-XoK6Ht-T59Oecnlmj8/view?usp=drivesdk", "https://drive.google.com/file/d/1dHZaZRbGv_xJ8xlp5CzkU67IhNRGxXjc/view?usp=sharing",
  "https://drive.google.com/file/d/1N3c4U4FwWoQDrUM2H1-eCUjkXU6lO_2X/view?usp=sharing", "https://drive.google.com/file/d/1V82Rm78Sfw90gxz1wGFLj1P9Ml_FnByr/view?usp=sharing", "https://drive.google.com/file/d/1qzoTUEKdWh3urLrs2dBb3GGz4OYD4OwK/view?usp=sharing", "https://drive.google.com/file/d/1TegwyIvL_Vrtgxaneufrl60TmyPCSPtY/view?usp=sharing", "https://drive.google.com/file/d/1CvnFs4j6Fd1Ip_MUV9Mklv-_mpfrYIL3/view?usp=sharing", "https://drive.google.com/file/d/1ajYpMf8SUaZsP5cXzMSYFi0iUeDyb6ZV/view?usp=sharing", "https://drive.google.com/file/d/1Be6h37Y10JlufiIuwFdJq2wLPXWwk_As/view?usp=sharing", "https://drive.google.com/file/d/1TcnKpttxeKsJ7k63lrzkW9VTfu2tMciR/view?usp=sharing", "https://drive.google.com/file/d/1RBfkPc_7ecnNgitDayBP_Upso5UqvVxU/view?usp=sharing", "https://drive.google.com/file/d/1TFRO3EsJXbeeESJp3fX0WOk8h7vcsK_s/view?usp=sharing",
  "https://drive.google.com/file/d/1xIVYn1dSxJqcyAbUqU1gVnpbC-c34DLq/view?usp=sharing", "https://drive.google.com/file/d/14SRcG-VSfHcIhvxLQ2WRI6lHn2sMjRrD/view?usp=sharing", "https://drive.google.com/file/d/1hh-8_g7H95pxz5Ha9r0HLrz1p6-jqNq1/view?usp=sharing", "https://drive.google.com/file/d/1fqj_x6f1VrgogNZcYHPvp2HN1n1ygSbx/view?usp=sharing", "https://drive.google.com/file/d/1fqj_x6f1VrgogNZcYHPvp2HN1n1ygSbx/view?usp=sharing",
  "https://drive.google.com/file/d/1bvtOHQU4xPUWZoDpZ6ios_0w3U1-m_2L/view?usp=sharing", "https://drive.google.com/file/d/1Z7Ty_AO7alyNhwdgtPQaUu-FpZAPVSt-/view?usp=sharing", "https://drive.google.com/file/d/1lolCXxDWGr3LjEenZT7x9NJWwchOVpwm/view?usp=sharing", "https://drive.google.com/file/d/1WEFankwhNSXtqxbKRmkPMEA2rKldeL0N/view?usp=sharing", "https://drive.google.com/file/d/1TFHW-6hedDqEd3qjqS03iJsqd1pHguEM/view?usp=sharing",
  "https://drive.google.com/file/d/1GZ6bmoA77E1yPhHo2K2MQL2gAQkuNXL5/view?usp=sharing", "https://drive.google.com/file/d/1sHkK_MD41WxOolAugbqGSt0PDASnfLf9/view?usp=sharing", "https://drive.google.com/file/d/1uzUE05c6G4b6C8dXpVtC2Vri2Voho-ob/view?usp=sharing", "https://drive.google.com/file/d/17LTdxUuuRUpnEFNGCPNtz92eDlm2XGWs/view?usp=sharing", "https://drive.google.com/file/d/1r78y_VELfLBS3XFJa7JJYfpxIWhUaLX6/view?usp=sharing",
  "https://drive.google.com/file/d/1NAY907sHUGQKmr7jSuoaeinuL7qumxZ7/view?usp=sharing", "https://drive.google.com/file/d/1uZu2St91aLuEPTpYEmoVDsxbsoe9ITFu/view?usp=sharing", "https://drive.google.com/file/d/1bPW4HlY2PkfnVwa3YkwN6qOP5QQKTUCN/view?usp=sharing", "https://drive.google.com/file/d/13viLa0znr_Wcc-yOBUFTRise4vBZIIK-/view?usp=sharing", "https://drive.google.com/file/d/14ecvUeJzhlKrQM6D4CHIMTqbZyZ2t_T7/view?usp=sharing",
  "https://drive.google.com/file/d/1n-U-ubtjFeeiJ9IMbD2VD3HjIeyKYR4C/view?usp=sharing", "https://drive.google.com/file/d/1sQMJ4XY-Ha7NLsP1zjwwFKuIuI37Epg1/view?usp=sharing", "https://drive.google.com/file/d/1eYMx5G6B3jNxCLf6JBmA5kp_BNqWtTE5/view?usp=sharing", "https://drive.google.com/file/d/19BQcztfbysZHpsOIFDXkepP6lH_SQZZM/view?usp=sharing", "https://drive.google.com/file/d/1QzTofgp2tjBFvLE3cCvccXLAJ6rBSexF/view?usp=sharing",
  "https://drive.google.com/file/d/1fV4ixM9kt8j_viNVvHwqTcGk_Tcha-SA/view?usp=sharing", "https://drive.google.com/file/d/1JuvFONy6_pqKEvpOcLfmON8tUnHh4tcW/view?usp=sharing", "https://drive.google.com/file/d/1Y_5jQCQ6L8qktGZCU4WQtXGoVFQH73M7/view?usp=sharing", "https://drive.google.com/file/d/1uHfOK7OrXin8bKh9cJgxONXSZg-s7Fij/view?usp=sharing", "https://drive.google.com/file/d/1U8Ekw2H6RI7woPnZxB8eOJv4LDz8f1dq/view?usp=sharing",
  "https://drive.google.com/file/d/1b0xPmp8YMOIyvQfxoL4piq0k87fbwcnw/view?usp=sharing", "https://drive.google.com/file/d/1yRV48bCobljty_gKn3YHlo-YfMi5EHr6/view?usp=sharing", "https://drive.google.com/file/d/1MVSIavg-KJv_HQInWVPjgervikd-QHgq/view?usp=sharing", "https://drive.google.com/file/d/1ELqooG8OQg9Pe8wWANxuw34-82aA6zru/view?usp=sharing", "https://drive.google.com/file/d/1b65BF0ccRMPcKGw0y7Whm5Ov_X4Q8Knj/view?usp=sharing",
  "https://drive.google.com/file/d/1AuzWByW6c05kF0PeGkc-rMJ-rP56iVmJ/view?usp=sharing", "https://drive.google.com/file/d/1i-B1ijwTtD_F2pOmKuuCP2Qs01NjHDKn/view?usp=sharing", "https://drive.google.com/file/d/15DV7pIu3yDUG215G98FDdAAoNBdTcypy/view?usp=sharing", "https://drive.google.com/file/d/1jrH4C27kL37k-BIUzw_YaLJzSKuF8UK9/view?usp=sharing", "https://drive.google.com/file/d/1btxk1i0bM42YhWDXTzGCIUuKbdo6M3UE/view?usp=sharing",
  "https://drive.google.com/file/d/1UhzL6mavN8sAr4nrupi8_hao2xcrxVYN/view?usp=sharing", "https://drive.google.com/file/d/1oEvbAMQwGCggvzUU6mZN-5yjY1VUyIrL/view?usp=sharing", "https://drive.google.com/file/d/1UkjBvc-T9VH6tzTsdJuizJ6sGZHY40m6/view?usp=sharing", "https://drive.google.com/file/d/1Fv6eL2B0TTPNhfgFYg29aDA2N4I50qea/view?usp=sharing", "https://drive.google.com/file/d/1lb0qEwwHhY8zhydCOOlAmTk09TZOym7Q/view?usp=sharing",
  "https://drive.google.com/file/d/16if4JcrXExHp2vwUh_kzoSaNezHcg4no/view?usp=sharing", "https://drive.google.com/file/d/1JaoxwXzBpYefijPUjHgTkwDMqYsRrgj3/view?usp=sharing", "https://drive.google.com/file/d/1jGIS96lmtcjTyoDJGKchk2jAXQZLR7v9/view?usp=sharing", "https://drive.google.com/file/d/1S5zJEk-ydnbAB8CSIz-MI4y_kVSWa5YN/view?usp=sharing", "https://drive.google.com/file/d/1DklWNUofr0fDPLga5KdSAqKQMFBCFZpP/view?usp=sharing",
  "https://drive.google.com/file/d/1zzueacsZn5y1V3v11NC-m0Ba3nN0wKq2/view?usp=sharing", "https://drive.google.com/file/d/16bSwshx__gS7Al_uIoo3fUNXg4eMW_cV/view?usp=sharing", "https://drive.google.com/file/d/1fWMeUHC00Lwni6adh_7bY5g8wKOyHB_d/view?usp=sharing", "https://drive.google.com/file/d/1UyvR6GhkKv3Ode_tQ6K9Iq6cdIM1aUuq/view?usp=sharing"
];
const azkarSections = [
  { id: 'morning', name: 'أذكار الصباح', icon: '🌞' },
  { id: 'evening', name: 'أذكار المساء', icon: '🌜' },
  { id: 'prayer', name: 'أذكار بعد الصلاة', icon: '🕌' },
  { id: 'sleep', name: 'أذكار النوم', icon: '😴' },
  { id: 'wake', name: 'أذكار الاستيقاظ', icon: '🌅' },
  { id: 'doa', name: 'الْأدْعِيَةُ القرآنية  ', icon: '🤲' },
];

// إضافة روابط جوجل درايف لمقاطع الصوت
const sectionAudio = [
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/001.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/001.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/001.mp3", "https://server13.mp3quran.net/husr/001.mp3", "https://server8.mp3quran.net/bna/001.mp3", "https://server10.mp3quran.net/ajm/128/001.mp3", "https://server11.mp3quran.net/sds/001.mp3", "https://server12.mp3quran.net/maher/001.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/001.mp3", "https://server8.mp3quran.net/afs/001.mp3"],//1
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/002.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/002.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/002.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/002.mp3", "https://server8.mp3quran.net/bna/002.mp3", "https://server10.mp3quran.net/ajm/128/002.mp3", "https://server11.mp3quran.net/sds/002.mp3", "https://server12.mp3quran.net/maher/002.mp3", "", "https://server8.mp3quran.net/afs/002.mp3"],//2
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/003.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/003.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/003.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/003.mp3", "https://server8.mp3quran.net/bna/003.mp3", "https://server10.mp3quran.net/ajm/128/003.mp3", "https://server11.mp3quran.net/sds/003.mp3", "https://server12.mp3quran.net/maher/003.mp3", "", "https://server8.mp3quran.net/afs/003.mp3"],//3
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/004.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/004.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/004.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/004.mp3", "https://server8.mp3quran.net/bna/004.mp3", "https://server10.mp3quran.net/ajm/128/004.mp3", "https://server11.mp3quran.net/sds/004.mp3", "https://server12.mp3quran.net/maher/004.mp3", "", "https://server8.mp3quran.net/afs/004.mp3"],//4
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/005.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/005.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/005.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/005.mp3", "https://server8.mp3quran.net/bna/005.mp3", "https://server10.mp3quran.net/ajm/128/005.mp3", "https://server11.mp3quran.net/sds/005.mp3", "https://server12.mp3quran.net/maher/005.mp3", "", "https://server8.mp3quran.net/afs/005.mp3"],//5
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/006.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/006.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/006.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/006.mp3", "https://server8.mp3quran.net/bna/006.mp3", "https://server10.mp3quran.net/ajm/128/006.mp3", "https://server11.mp3quran.net/sds/006.mp3", "https://server12.mp3quran.net/maher/006.mp3", "", "https://server8.mp3quran.net/afs/006.mp3"],//6
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/007.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/007.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/007.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/007.mp3", "https://server8.mp3quran.net/bna/007.mp3", "https://server10.mp3quran.net/ajm/128/007.mp3", "https://server11.mp3quran.net/sds/007.mp3", "https://server12.mp3quran.net/maher/007.mp3", "", "https://server8.mp3quran.net/afs/007.mp3"],//7
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/008.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/008.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/008.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/008.mp3", "https://server8.mp3quran.net/bna/008.mp3", "https://server10.mp3quran.net/ajm/128/008.mp3", "https://server11.mp3quran.net/sds/008.mp3", "https://server12.mp3quran.net/maher/008.mp3", "", "https://server8.mp3quran.net/afs/008.mp3"],//8
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/009.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/009.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/009.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/009.mp3", "https://server8.mp3quran.net/bna/009.mp3", "https://server10.mp3quran.net/ajm/128/009.mp3", "https://server11.mp3quran.net/sds/009.mp3", "https://server12.mp3quran.net/maher/009.mp3", "", "https://server8.mp3quran.net/afs/009.mp3"],//9
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/010.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/010.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/010.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/010.mp3", "https://server8.mp3quran.net/bna/010.mp3", "https://server10.mp3quran.net/ajm/128/010.mp3", "https://server11.mp3quran.net/sds/010.mp3", "https://server12.mp3quran.net/maher/010.mp3", "", "https://server8.mp3quran.net/afs/010.mp3"],//10
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/011.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/011.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/011.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/011.mp3", "https://server8.mp3quran.net/bna/011.mp3", "https://server10.mp3quran.net/ajm/128/011.mp3", "https://server11.mp3quran.net/sds/011.mp3", "https://server12.mp3quran.net/maher/011.mp3", "", "https://server8.mp3quran.net/afs/011.mp3"],//11
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/012.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/012.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/012.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/012.mp3", "https://server8.mp3quran.net/bna/012.mp3", "https://server10.mp3quran.net/ajm/128/012.mp3", "https://server11.mp3quran.net/sds/012.mp3", "https://server12.mp3quran.net/maher/012.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/012.mp3", "https://server8.mp3quran.net/afs/012.mp3"],//12
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/013.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/013.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/013.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/013.mp3", "https://server8.mp3quran.net/bna/013.mp3", "https://server10.mp3quran.net/ajm/128/013.mp3", "https://server11.mp3quran.net/sds/013.mp3", "https://server12.mp3quran.net/maher/013.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/013.mp3", "https://server8.mp3quran.net/afs/013.mp3"],//13
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/014.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/014.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/014.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/014.mp3", "https://server8.mp3quran.net/bna/014.mp3", "https://server10.mp3quran.net/ajm/128/014.mp3", "https://server11.mp3quran.net/sds/014.mp3", "https://server12.mp3quran.net/maher/014.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/014.mp3", "https://server8.mp3quran.net/afs/014.mp3"],//14
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/015.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/015.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/015.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/015.mp3", "https://server8.mp3quran.net/bna/015.mp3", "https://server10.mp3quran.net/ajm/128/015.mp3", "https://server11.mp3quran.net/sds/015.mp3", "https://server12.mp3quran.net/maher/015.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/015.mp3", "https://server8.mp3quran.net/afs/015.mp3"],//15
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/016.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/016.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/016.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/016.mp3", "https://server8.mp3quran.net/bna/016.mp3", "https://server10.mp3quran.net/ajm/128/016.mp3", "https://server11.mp3quran.net/sds/016.mp3", "https://server12.mp3quran.net/maher/016.mp3", "", "https://server8.mp3quran.net/afs/016.mp3"],//16
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/017.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/017.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/017.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/017.mp3", "https://server8.mp3quran.net/bna/017.mp3", "https://server10.mp3quran.net/ajm/128/017.mp3", "https://server11.mp3quran.net/sds/017.mp3", "https://server12.mp3quran.net/maher/017.mp3", "", "https://server8.mp3quran.net/afs/017.mp3"],//17
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/018.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/018.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/018.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/018.mp3", "https://server8.mp3quran.net/bna/018.mp3", "https://server10.mp3quran.net/ajm/128/018.mp3", "https://server11.mp3quran.net/sds/018.mp3", "https://server12.mp3quran.net/maher/018.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/018.mp3", "https://server8.mp3quran.net/afs/018.mp3"],//18
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/019.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/019.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/019.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/019.mp3", "https://server8.mp3quran.net/bna/019.mp3", "https://server10.mp3quran.net/ajm/128/019.mp3", "https://server11.mp3quran.net/sds/019.mp3", "https://server12.mp3quran.net/maher/019.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/019.mp3", "https://server8.mp3quran.net/afs/019.mp3"],//19
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/020.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/020.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/020.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/020.mp3", "https://server8.mp3quran.net/bna/020.mp3", "https://server10.mp3quran.net/ajm/128/020.mp3", "https://server11.mp3quran.net/sds/020.mp3", "https://server12.mp3quran.net/maher/020.mp3", "", "https://server8.mp3quran.net/afs/020.mp3"],//20
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/021.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/021.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/021.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/021.mp3", "https://server8.mp3quran.net/bna/021.mp3", "https://server10.mp3quran.net/ajm/128/021.mp3", "https://server11.mp3quran.net/sds/021.mp3", "https://server12.mp3quran.net/maher/021.mp3", "", "https://server8.mp3quran.net/afs/021.mp3"],//21
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/022.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/022.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/022.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/022.mp3", "https://server8.mp3quran.net/bna/022.mp3", "https://server10.mp3quran.net/ajm/128/022.mp3", "https://server11.mp3quran.net/sds/022.mp3", "https://server12.mp3quran.net/maher/022.mp3", "", "https://server8.mp3quran.net/afs/022.mp3"],//22
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/023.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/023.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/023.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/023.mp3", "https://server8.mp3quran.net/bna/023.mp3", "https://server10.mp3quran.net/ajm/128/023.mp3", "https://server11.mp3quran.net/sds/023.mp3", "https://server12.mp3quran.net/maher/023.mp3", "", "https://server8.mp3quran.net/afs/023.mp3"],//23
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/024.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/024.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/024.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/024.mp3", "https://server8.mp3quran.net/bna/024.mp3", "https://server10.mp3quran.net/ajm/128/024.mp3", "https://server11.mp3quran.net/sds/024.mp3", "https://server12.mp3quran.net/maher/024.mp3", "", "https://server8.mp3quran.net/afs/024.mp3"],//24
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/025.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/025.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/025.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/025.mp3", "https://server8.mp3quran.net/bna/025.mp3", "https://server10.mp3quran.net/ajm/128/025.mp3", "https://server11.mp3quran.net/sds/025.mp3", "https://server12.mp3quran.net/maher/025.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/025.mp3", "https://server8.mp3quran.net/afs/025.mp3"],//25
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/026.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/026.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/026.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/026.mp3", "https://server8.mp3quran.net/bna/026.mp3", "https://server10.mp3quran.net/ajm/128/026.mp3", "https://server11.mp3quran.net/sds/026.mp3", "https://server12.mp3quran.net/maher/026.mp3", "", "https://server8.mp3quran.net/afs/026.mp3"],//26
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/027.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/027.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/027.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/027.mp3", "https://server8.mp3quran.net/bna/027.mp3", "https://server10.mp3quran.net/ajm/128/027.mp3", "https://server11.mp3quran.net/sds/027.mp3", "https://server12.mp3quran.net/maher/027.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/027.mp3", "https://server8.mp3quran.net/afs/027.mp3"],//27
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/028.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/028.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/028.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/028.mp3", "https://server8.mp3quran.net/bna/028.mp3", "https://server10.mp3quran.net/ajm/128/028.mp3", "https://server11.mp3quran.net/sds/028.mp3", "https://server12.mp3quran.net/maher/028.mp3", "", "https://server8.mp3quran.net/afs/028.mp3"],//28
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/029.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/029.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/029.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/029.mp3", "https://server8.mp3quran.net/bna/029.mp3", "https://server10.mp3quran.net/ajm/128/029.mp3", "https://server11.mp3quran.net/sds/029.mp3", "https://server12.mp3quran.net/maher/029.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/029.mp3", "https://server8.mp3quran.net/afs/029.mp3"],//29
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/030.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/030.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/030.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/030.mp3", "https://server8.mp3quran.net/bna/030.mp3", "https://server10.mp3quran.net/ajm/128/030.mp3", "https://server11.mp3quran.net/sds/030.mp3", "https://server12.mp3quran.net/maher/030.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/030.mp3", "https://server8.mp3quran.net/afs/030.mp3"],//30
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/031.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/031.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/031.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/031.mp3", "https://server8.mp3quran.net/bna/031.mp3", "https://server10.mp3quran.net/ajm/128/031.mp3", "https://server11.mp3quran.net/sds/031.mp3", "https://server12.mp3quran.net/maher/031.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/031.mp3", "https://server8.mp3quran.net/afs/031.mp3"],//31
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/032.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/032.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/032.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/032.mp3", "https://server8.mp3quran.net/bna/032.mp3", "https://server10.mp3quran.net/ajm/128/032.mp3", "https://server11.mp3quran.net/sds/032.mp3", "https://server12.mp3quran.net/maher/032.mp3", "", "https://server8.mp3quran.net/afs/032.mp3"],//32
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/033.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/033.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/033.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/033.mp3", "https://server8.mp3quran.net/bna/033.mp3", "https://server10.mp3quran.net/ajm/128/033.mp3", "https://server11.mp3quran.net/sds/033.mp3", "https://server12.mp3quran.net/maher/033.mp3", "", "https://server8.mp3quran.net/afs/033.mp3"],//33
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/034.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/034.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/034.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/034.mp3", "https://server8.mp3quran.net/bna/034.mp3", "https://server10.mp3quran.net/ajm/128/034.mp3", "https://server11.mp3quran.net/sds/034.mp3", "https://server12.mp3quran.net/maher/034.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/034.mp3", "https://server8.mp3quran.net/afs/034.mp3"],//34
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/035.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/035.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/035.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/035.mp3", "https://server8.mp3quran.net/bna/035.mp3", "https://server10.mp3quran.net/ajm/128/035.mp3", "https://server11.mp3quran.net/sds/035.mp3", "https://server12.mp3quran.net/maher/035.mp3", "", "https://server8.mp3quran.net/afs/035.mp3"],//35
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/036.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/036.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/036.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/036.mp3", "https://server8.mp3quran.net/bna/036.mp3", "https://server10.mp3quran.net/ajm/128/036.mp3", "https://server11.mp3quran.net/sds/036.mp3", "https://server12.mp3quran.net/maher/036.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/036.mp3", "https://server8.mp3quran.net/afs/036.mp3"],//36
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/037.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/037.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/037.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/037.mp3", "https://server8.mp3quran.net/bna/037.mp3", "https://server10.mp3quran.net/ajm/128/037.mp3", "https://server11.mp3quran.net/sds/037.mp3", "https://server12.mp3quran.net/maher/037.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/037.mp3", "https://server8.mp3quran.net/afs/037.mp3"],//37
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/038.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/038.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/038.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/038.mp3", "https://server8.mp3quran.net/bna/038.mp3", "https://server10.mp3quran.net/ajm/128/038.mp3", "https://server11.mp3quran.net/sds/038.mp3", "https://server12.mp3quran.net/maher/038.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/038.mp3", "https://server8.mp3quran.net/afs/038.mp3"],//38
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/039.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/039.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/039.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/039.mp3", "https://server8.mp3quran.net/bna/039.mp3", "https://server10.mp3quran.net/ajm/128/039.mp3", "https://server11.mp3quran.net/sds/039.mp3", "https://server12.mp3quran.net/maher/039.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/039.mp3", "https://server8.mp3quran.net/afs/039.mp3"],//39
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/040.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/040.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/040.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/040.mp3", "https://server8.mp3quran.net/bna/040.mp3", "https://server10.mp3quran.net/ajm/128/040.mp3", "https://server11.mp3quran.net/sds/040.mp3", "https://server12.mp3quran.net/maher/040.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/040.mp3", "https://server8.mp3quran.net/afs/040.mp3"],//40
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/041.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/041.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/041.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/041.mp3", "https://server8.mp3quran.net/bna/041.mp3", "https://server10.mp3quran.net/ajm/128/041.mp3", "https://server11.mp3quran.net/sds/041.mp3", "https://server12.mp3quran.net/maher/041.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/041.mp3", "https://server8.mp3quran.net/afs/041.mp3"],//41
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/042.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/042.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/042.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/042.mp3", "https://server8.mp3quran.net/bna/042.mp3", "https://server10.mp3quran.net/ajm/128/042.mp3", "https://server11.mp3quran.net/sds/042.mp3", "https://server12.mp3quran.net/maher/042.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/042.mp3", "https://server8.mp3quran.net/afs/042.mp3"],//42
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/043.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/043.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/043.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/043.mp3", "https://server8.mp3quran.net/bna/043.mp3", "https://server10.mp3quran.net/ajm/128/043.mp3", "https://server11.mp3quran.net/sds/043.mp3", "https://server12.mp3quran.net/maher/043.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/043.mp3", "https://server8.mp3quran.net/afs/043.mp3"],//43
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/044.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/044.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/040.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/044.mp3", "https://server8.mp3quran.net/bna/044.mp3", "https://server10.mp3quran.net/ajm/128/044.mp3", "https://server11.mp3quran.net/sds/044.mp3", "https://server12.mp3quran.net/maher/044.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/044.mp3", "https://server8.mp3quran.net/afs/044.mp3"],//44
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/045.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/045.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/045.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/045.mp3", "https://server8.mp3quran.net/bna/045.mp3", "https://server10.mp3quran.net/ajm/128/045.mp3", "https://server11.mp3quran.net/sds/045.mp3", "https://server12.mp3quran.net/maher/045.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/045.mp3", "https://server8.mp3quran.net/afs/045.mp3"],//45
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/046.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/046.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/046.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/046.mp3", "https://server8.mp3quran.net/bna/046.mp3", "https://server10.mp3quran.net/ajm/128/046.mp3", "https://server11.mp3quran.net/sds/046.mp3", "https://server12.mp3quran.net/maher/046.mp3", "", "https://server8.mp3quran.net/afs/046.mp3"],//46
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/047.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/047.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/047.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/047.mp3", "https://server8.mp3quran.net/bna/047.mp3", "https://server10.mp3quran.net/ajm/128/047.mp3", "https://server11.mp3quran.net/sds/047.mp3", "https://server12.mp3quran.net/maher/047.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/047.mp3", "https://server8.mp3quran.net/afs/047.mp3"],//47
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/048.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/048.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/048.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/048.mp3", "https://server8.mp3quran.net/bna/048.mp3", "https://server10.mp3quran.net/ajm/128/048.mp3", "https://server11.mp3quran.net/sds/048.mp3", "https://server12.mp3quran.net/maher/048.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/048.mp3", "https://server8.mp3quran.net/afs/048.mp3"],//48
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/049.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/049.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/049.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/049.mp3", "https://server8.mp3quran.net/bna/049.mp3", "https://server10.mp3quran.net/ajm/128/049.mp3", "https://server11.mp3quran.net/sds/049.mp3", "https://server12.mp3quran.net/maher/049.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/049.mp3", "https://server8.mp3quran.net/afs/049.mp3"],//49
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/050.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/050.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/050.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/050.mp3", "https://server8.mp3quran.net/bna/050.mp3", "https://server10.mp3quran.net/ajm/128/050.mp3", "https://server11.mp3quran.net/sds/050.mp3", "https://server12.mp3quran.net/maher/050.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/050.mp3", "https://server8.mp3quran.net/afs/050.mp3"],//50
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/051.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/051.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/051.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/051.mp3", "https://server8.mp3quran.net/bna/051.mp3", "https://server10.mp3quran.net/ajm/128/051.mp3", "https://server11.mp3quran.net/sds/051.mp3", "https://server12.mp3quran.net/maher/051.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/051.mp3", "https://server8.mp3quran.net/afs/051.mp3"],//51
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/052.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/052.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/052.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/052.mp3", "https://server8.mp3quran.net/bna/052.mp3", "https://server10.mp3quran.net/ajm/128/052.mp3", "https://server11.mp3quran.net/sds/052.mp3", "https://server12.mp3quran.net/maher/052.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/052.mp3", "https://server8.mp3quran.net/afs/052.mp3"],//52
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/053.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/053.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/053.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/053.mp3", "https://server8.mp3quran.net/bna/053.mp3", "https://server10.mp3quran.net/ajm/128/053.mp3", "https://server11.mp3quran.net/sds/053.mp3", "https://server12.mp3quran.net/maher/053.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/053.mp3", "https://server8.mp3quran.net/afs/053.mp3"],//53
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/054.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/054.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/054.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/054.mp3", "https://server8.mp3quran.net/bna/054.mp3", "https://server10.mp3quran.net/ajm/128/054.mp3", "https://server11.mp3quran.net/sds/054.mp3", "https://server12.mp3quran.net/maher/054.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/054.mp3", "https://server8.mp3quran.net/afs/054.mp3"],//54
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/055.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/055.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/055.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/055.mp3", "https://server8.mp3quran.net/bna/055.mp3", "https://server10.mp3quran.net/ajm/128/055.mp3", "https://server11.mp3quran.net/sds/055.mp3", "https://server12.mp3quran.net/maher/055.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/055.mp3", "https://server8.mp3quran.net/afs/055.mp3"],//55
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/056.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/056.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/056.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/056.mp3", "https://server8.mp3quran.net/bna/056.mp3", "https://server10.mp3quran.net/ajm/128/056.mp3", "https://server11.mp3quran.net/sds/056.mp3", "https://server12.mp3quran.net/maher/056.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/056.mp3", "https://server8.mp3quran.net/afs/056.mp3"],//56
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/057.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/057.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/057.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/057.mp3", "https://server8.mp3quran.net/bna/057.mp3", "https://server10.mp3quran.net/ajm/128/057.mp3", "https://server11.mp3quran.net/sds/057.mp3", "https://server12.mp3quran.net/maher/057.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/057.mp3", "https://server8.mp3quran.net/afs/057.mp3"],//57
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/058.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/058.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/058.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/058.mp3", "https://server8.mp3quran.net/bna/058.mp3", "https://server10.mp3quran.net/ajm/128/058.mp3", "https://server11.mp3quran.net/sds/058.mp3", "https://server12.mp3quran.net/maher/058.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/058.mp3", "https://server8.mp3quran.net/afs/058.mp3"],//58
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/059.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/059.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/059.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/059.mp3", "https://server8.mp3quran.net/bna/059.mp3", "https://server10.mp3quran.net/ajm/128/059.mp3", "https://server11.mp3quran.net/sds/059.mp3", "https://server12.mp3quran.net/maher/059.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/059.mp3", "https://server8.mp3quran.net/afs/059.mp3"],//59
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/060.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/060.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/060.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/060.mp3", "https://server8.mp3quran.net/bna/060.mp3", "https://server10.mp3quran.net/ajm/128/060.mp3", "https://server11.mp3quran.net/sds/060.mp3", "https://server12.mp3quran.net/maher/060.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/060.mp3", "https://server8.mp3quran.net/afs/060.mp3"],//60
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/061.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/061.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/061.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/061.mp3", "https://server8.mp3quran.net/bna/061.mp3", "https://server10.mp3quran.net/ajm/128/061.mp3", "https://server11.mp3quran.net/sds/061.mp3", "https://server12.mp3quran.net/maher/061.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/061.mp3", "https://server8.mp3quran.net/afs/061.mp3"],//61
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/062.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/062.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/062.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/062.mp3", "https://server8.mp3quran.net/bna/062.mp3", "https://server10.mp3quran.net/ajm/128/062.mp3", "https://server11.mp3quran.net/sds/062.mp3", "https://server12.mp3quran.net/maher/062.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/062.mp3", "https://server8.mp3quran.net/afs/062.mp3"],//62
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/063.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/063.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/063.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/063.mp3", "https://server8.mp3quran.net/bna/063.mp3", "https://server10.mp3quran.net/ajm/128/063.mp3", "https://server11.mp3quran.net/sds/063.mp3", "https://server12.mp3quran.net/maher/063.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/063.mp3", "https://server8.mp3quran.net/afs/063.mp3"],//63
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/064.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/064.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/064.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/064.mp3", "https://server8.mp3quran.net/bna/064.mp3", "https://server10.mp3quran.net/ajm/128/064.mp3", "https://server11.mp3quran.net/sds/064.mp3", "https://server12.mp3quran.net/maher/064.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/064.mp3", "https://server8.mp3quran.net/afs/064.mp3"],//64
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/065.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/065.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/065.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/065.mp3", "https://server8.mp3quran.net/bna/065.mp3", "https://server10.mp3quran.net/ajm/128/065.mp3", "https://server11.mp3quran.net/sds/065.mp3", "https://server12.mp3quran.net/maher/065.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/065.mp3", "https://server8.mp3quran.net/afs/065.mp3"],//65
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/066.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/066.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/066.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/066.mp3", "https://server8.mp3quran.net/bna/066.mp3", "https://server10.mp3quran.net/ajm/128/066.mp3", "https://server11.mp3quran.net/sds/066.mp3", "https://server12.mp3quran.net/maher/066.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/066.mp3", "https://server8.mp3quran.net/afs/066.mp3"],//66

  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/067.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/067.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/067.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/067.mp3", "https://server8.mp3quran.net/bna/067.mp3", "https://server10.mp3quran.net/ajm/128/067.mp3", "https://server11.mp3quran.net/sds/067.mp3", "https://server12.mp3quran.net/maher/067.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/067.mp3", "https://server8.mp3quran.net/afs/067.mp3"],//67
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/068.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/068.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/068.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/068.mp3", "https://server8.mp3quran.net/bna/068.mp3", "https://server10.mp3quran.net/ajm/128/068.mp3", "https://server11.mp3quran.net/sds/068.mp3", "https://server12.mp3quran.net/maher/068.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/068.mp3", "https://server8.mp3quran.net/afs/068.mp3"],//68
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/069.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/069.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/069.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/069.mp3", "https://server8.mp3quran.net/bna/069.mp3", "https://server10.mp3quran.net/ajm/128/069.mp3", "https://server11.mp3quran.net/sds/069.mp3", "https://server12.mp3quran.net/maher/069.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/069.mp3", "https://server8.mp3quran.net/afs/069.mp3"],//69
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/070.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/070.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/070.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/070.mp3", "https://server8.mp3quran.net/bna/070.mp3", "https://server10.mp3quran.net/ajm/128/070.mp3", "https://server11.mp3quran.net/sds/070.mp3", "https://server12.mp3quran.net/maher/070.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/070.mp3", "https://server8.mp3quran.net/afs/070.mp3"],//70
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/071.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/071.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/071.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/071.mp3", "https://server8.mp3quran.net/bna/071.mp3", "https://server10.mp3quran.net/ajm/128/071.mp3", "https://server11.mp3quran.net/sds/071.mp3", "https://server12.mp3quran.net/maher/071.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/071.mp3", "https://server8.mp3quran.net/afs/071.mp3"],//71
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/072.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/072.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/072.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/072.mp3", "https://server8.mp3quran.net/bna/072.mp3", "https://server10.mp3quran.net/ajm/128/0072.mp3", "https://server11.mp3quran.net/sds/072.mp3", "https://server12.mp3quran.net/maher/072.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/072.mp3", "https://server8.mp3quran.net/afs/072.mp3"],//72
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/073.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/073.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/073.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/073.mp3", "https://server8.mp3quran.net/bna/073.mp3", "https://server10.mp3quran.net/ajm/128/073.mp3", "https://server11.mp3quran.net/sds/073.mp3", "https://server12.mp3quran.net/maher/073.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/073.mp3", "https://server8.mp3quran.net/afs/073.mp3"],//73
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/074.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/074.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/074.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/074.mp3", "https://server8.mp3quran.net/bna/074.mp3", "https://server10.mp3quran.net/ajm/128/074.mp3", "https://server11.mp3quran.net/sds/074.mp3", "https://server12.mp3quran.net/maher/074.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/074.mp3", "https://server8.mp3quran.net/afs/074.mp3"],//74
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/075.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/075.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/075.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/075.mp3", "https://server8.mp3quran.net/bna/075.mp3", "https://server10.mp3quran.net/ajm/128/075.mp3", "https://server11.mp3quran.net/sds/075.mp3", "https://server12.mp3quran.net/maher/075.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/075.mp3", "https://server8.mp3quran.net/afs/075.mp3"],//75
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/076.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/076.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/076.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/076.mp3", "https://server8.mp3quran.net/bna/076.mp3", "https://server10.mp3quran.net/ajm/128/076.mp3", "https://server11.mp3quran.net/sds/076.mp3", "https://server12.mp3quran.net/maher/076.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/076.mp3", "https://server8.mp3quran.net/afs/076.mp3"],//76
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/077.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/077.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/077.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/077.mp3", "https://server8.mp3quran.net/bna/077.mp3", "https://server10.mp3quran.net/ajm/128/077.mp3", "https://server11.mp3quran.net/sds/077.mp3", "https://server12.mp3quran.net/maher/077.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/077.mp3", "https://server8.mp3quran.net/afs/077.mp3"],//77
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/078.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/078.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/078.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/078.mp3", "https://server8.mp3quran.net/bna/078.mp3", "https://server10.mp3quran.net/ajm/128/078.mp3", "https://server11.mp3quran.net/sds/078.mp3", "https://server12.mp3quran.net/maher/078.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/078.mp3", "https://server8.mp3quran.net/afs/078.mp3"],//78
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/079.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/079.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/079.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/079.mp3", "https://server8.mp3quran.net/bna/079.mp3", "https://server10.mp3quran.net/ajm/128/079.mp3", "https://server11.mp3quran.net/sds/079.mp3", "https://server12.mp3quran.net/maher/079.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/079.mp3", "https://server8.mp3quran.net/afs/079.mp3"],//79
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/080.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/080.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/080.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/080.mp3", "https://server8.mp3quran.net/bna/080.mp3", "https://server10.mp3quran.net/ajm/128/080.mp3", "https://server11.mp3quran.net/sds/080.mp3", "https://server12.mp3quran.net/maher/080.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/080.mp3", "https://server8.mp3quran.net/afs/080.mp3"],//80
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/081.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/081.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/081.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/081.mp3", "https://server8.mp3quran.net/bna/081.mp3", "https://server10.mp3quran.net/ajm/128/081.mp3", "https://server11.mp3quran.net/sds/081.mp3", "https://server12.mp3quran.net/maher/081.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/081.mp3", "https://server8.mp3quran.net/afs/081.mp3"],//81
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/082.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/082.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/082.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/082.mp3", "https://server8.mp3quran.net/bna/082.mp3", "https://server10.mp3quran.net/ajm/128/082.mp3", "https://server11.mp3quran.net/sds/082.mp3", "https://server12.mp3quran.net/maher/082.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/082.mp3", "https://server8.mp3quran.net/afs/082.mp3"],//82
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/083.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/083.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/083.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/083.mp3", "https://server8.mp3quran.net/bna/083.mp3", "https://server10.mp3quran.net/ajm/128/083.mp3", "https://server11.mp3quran.net/sds/083.mp3", "https://server12.mp3quran.net/maher/083.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/083.mp3", "https://server8.mp3quran.net/afs/083.mp3"],//83
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/084.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/084.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/084.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/084.mp3", "https://server8.mp3quran.net/bna/084.mp3", "https://server10.mp3quran.net/ajm/128/084.mp3", "https://server11.mp3quran.net/sds/084.mp3", "https://server12.mp3quran.net/maher/084.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/084.mp3", "https://server8.mp3quran.net/afs/084.mp3"],//84
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/085.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/085.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/085.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/085.mp3", "https://server8.mp3quran.net/bna/085.mp3", "https://server10.mp3quran.net/ajm/128/085.mp3", "https://server11.mp3quran.net/sds/085.mp3", "https://server12.mp3quran.net/maher/085.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/085.mp3", "https://server8.mp3quran.net/afs/085.mp3"],//85
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/086.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/086.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/086.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/086.mp3", "https://server8.mp3quran.net/bna/086.mp3", "https://server10.mp3quran.net/ajm/128/086.mp3", "https://server11.mp3quran.net/sds/086.mp3", "https://server12.mp3quran.net/maher/086.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/086.mp3", "https://server8.mp3quran.net/afs/086.mp3"],//86
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/087.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/087.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/087.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/087.mp3", "https://server8.mp3quran.net/bna/087.mp3", "https://server10.mp3quran.net/ajm/128/087.mp3", "https://server11.mp3quran.net/sds/087.mp3", "https://server12.mp3quran.net/maher/087.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/087.mp3", "https://server8.mp3quran.net/afs/087.mp3"],//87
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/088.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/088.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/088.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/088.mp3", "https://server8.mp3quran.net/bna/088.mp3", "https://server10.mp3quran.net/ajm/128/088.mp3", "https://server11.mp3quran.net/sds/088.mp3", "https://server12.mp3quran.net/maher/088.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/088.mp3", "https://server8.mp3quran.net/afs/088.mp3"],//88
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/089.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/089.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/089.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/089.mp3", "https://server8.mp3quran.net/bna/089.mp3", "https://server10.mp3quran.net/ajm/128/089.mp3", "https://server11.mp3quran.net/sds/089.mp3", "https://server12.mp3quran.net/maher/089.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/089.mp3", "https://server8.mp3quran.net/afs/089.mp3"],//89
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/090.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/090.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/090.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/090.mp3", "https://server8.mp3quran.net/bna/090.mp3", "https://server10.mp3quran.net/ajm/128/090.mp3", "https://server11.mp3quran.net/sds/090.mp3", "https://server12.mp3quran.net/maher/090.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/090.mp3", "https://server8.mp3quran.net/afs/090.mp3"],//90
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/091.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/091.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/091.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/091.mp3", "https://server8.mp3quran.net/bna/091.mp3", "https://server10.mp3quran.net/ajm/128/091.mp3", "https://server11.mp3quran.net/sds/091.mp3", "https://server12.mp3quran.net/maher/091.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/091.mp3", "https://server8.mp3quran.net/afs/091.mp3"],//91
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/092.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/092.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/092.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/092.mp3", "https://server8.mp3quran.net/bna/092.mp3", "https://server10.mp3quran.net/ajm/128/092.mp3", "https://server11.mp3quran.net/sds/092.mp3", "https://server12.mp3quran.net/maher/092.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/092.mp3", "https://server8.mp3quran.net/afs/092.mp3"],//92
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/093.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/093.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/093.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/093.mp3", "https://server8.mp3quran.net/bna/093.mp3", "https://server10.mp3quran.net/ajm/128/093.mp3", "https://server11.mp3quran.net/sds/093.mp3", "https://server12.mp3quran.net/maher/093.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/093.mp3", "https://server8.mp3quran.net/afs/093.mp3"],//93
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/094.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/094.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/094.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/094.mp3", "https://server8.mp3quran.net/bna/094.mp3", "https://server10.mp3quran.net/ajm/128/094.mp3", "https://server11.mp3quran.net/sds/094.mp3", "https://server12.mp3quran.net/maher/094.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/094.mp3", "https://server8.mp3quran.net/afs/094.mp3"],//94
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/095.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/095.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/095.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/095.mp3", "https://server8.mp3quran.net/bna/095.mp3", "https://server10.mp3quran.net/ajm/128/095.mp3", "https://server11.mp3quran.net/sds/095.mp3", "https://server12.mp3quran.net/maher/095.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/095.mp3", "https://server8.mp3quran.net/afs/095.mp3"],//95
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/096.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/096.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/096.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/096.mp3", "https://server8.mp3quran.net/bna/096.mp3", "https://server10.mp3quran.net/ajm/128/096.mp3", "https://server11.mp3quran.net/sds/096.mp3", "https://server12.mp3quran.net/maher/096.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/096.mp3", "https://server8.mp3quran.net/afs/096.mp3"],//96
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/097.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/097.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/097.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/097.mp3", "https://server8.mp3quran.net/bna/097.mp3", "https://server10.mp3quran.net/ajm/128/097.mp3", "https://server11.mp3quran.net/sds/097.mp3", "https://server12.mp3quran.net/maher/097.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/097.mp3", "https://server8.mp3quran.net/afs/097.mp3"],//97
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/098.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/098.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/098.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/098.mp3", "https://server8.mp3quran.net/bna/098.mp3", "https://server10.mp3quran.net/ajm/128/098.mp3", "https://server11.mp3quran.net/sds/098.mp3", "https://server12.mp3quran.net/maher/098.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/098.mp3", "https://server8.mp3quran.net/afs/098.mp3"],//98
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/099.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/099.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/099.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/099.mp3", "https://server8.mp3quran.net/bna/099.mp3", "https://server10.mp3quran.net/ajm/128/099.mp3", "https://server11.mp3quran.net/sds/099.mp3", "https://server12.mp3quran.net/maher/099.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/099.mp3", "https://server8.mp3quran.net/afs/099.mp3"],//99
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/100.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/100.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/100.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/100.mp3", "https://server8.mp3quran.net/bna/100.mp3", "https://server10.mp3quran.net/ajm/128/100.mp3", "https://server11.mp3quran.net/sds/100.mp3", "https://server12.mp3quran.net/maher/100.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/100.mp3", "https://server8.mp3quran.net/afs/100.mp3"],//100
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/101.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/101.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/101.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/101.mp3", "https://server8.mp3quran.net/bna/101.mp3", "https://server10.mp3quran.net/ajm/128/101.mp3", "https://server11.mp3quran.net/sds/101.mp3", "https://server12.mp3quran.net/maher/101.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/101.mp3", "https://server8.mp3quran.net/afs/101.mp3"],//101
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/102.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/102.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/102.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/102.mp3", "https://server8.mp3quran.net/bna/102.mp3", "https://server10.mp3quran.net/ajm/128/102.mp3", "https://server11.mp3quran.net/sds/102.mp3", "https://server12.mp3quran.net/maher/102.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/102.mp3", "https://server8.mp3quran.net/afs/102.mp3"],//102
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/103.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/103.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/103.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/103.mp3", "https://server8.mp3quran.net/bna/103.mp3", "https://server10.mp3quran.net/ajm/128/103.mp3", "https://server11.mp3quran.net/sds/103.mp3", "https://server12.mp3quran.net/maher/103.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/103.mp3", "https://server8.mp3quran.net/afs/103.mp3"],//103
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/104.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/104.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/104.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/104.mp3", "https://server8.mp3quran.net/bna/104.mp3", "https://server10.mp3quran.net/ajm/128/104.mp3", "https://server11.mp3quran.net/sds/104.mp3", "https://server12.mp3quran.net/maher/104.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/104.mp3", "https://server8.mp3quran.net/afs/104.mp3"],//104
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/105.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/105.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/105.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/105.mp3", "https://server8.mp3quran.net/bna/105.mp3", "https://server10.mp3quran.net/ajm/128/105.mp3", "https://server11.mp3quran.net/sds/105.mp3", "https://server12.mp3quran.net/maher/105.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/105.mp3", "https://server8.mp3quran.net/afs/105.mp3"],//105
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/106.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/106.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/106.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/106.mp3", "https://server8.mp3quran.net/bna/106.mp3", "https://server10.mp3quran.net/ajm/128/106.mp3", "https://server11.mp3quran.net/sds/106.mp3", "https://server12.mp3quran.net/maher/106.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/106.mp3", "https://server8.mp3quran.net/afs/106.mp3"],//106
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/107.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/107.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/107.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/107.mp3", "https://server8.mp3quran.net/bna/107.mp3", "https://server10.mp3quran.net/ajm/128/107.mp3", "https://server11.mp3quran.net/sds/107.mp3", "https://server12.mp3quran.net/maher/107.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/107.mp3", "https://server8.mp3quran.net/afs/107.mp3"],//107
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/108.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/108.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/108.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/108.mp3", "https://server8.mp3quran.net/bna/108.mp3", "https://server10.mp3quran.net/ajm/128/108.mp3", "https://server11.mp3quran.net/sds/108.mp3", "https://server12.mp3quran.net/maher/108.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/108.mp3", "https://server8.mp3quran.net/afs/108.mp3"],//108
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/109.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/109.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/109.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/109.mp3", "https://server8.mp3quran.net/bna/109.mp3", "https://server10.mp3quran.net/ajm/128/109.mp3", "https://server11.mp3quran.net/sds/109.mp3", "https://server12.mp3quran.net/maher/109.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/109.mp3", "https://server8.mp3quran.net/afs/109.mp3"],//109
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/110.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/110.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/110.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/110.mp3", "https://server8.mp3quran.net/bna/110.mp3", "https://server10.mp3quran.net/ajm/128/110.mp3", "https://server11.mp3quran.net/sds/110.mp3", "https://server12.mp3quran.net/maher/110.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/110.mp3", "https://server8.mp3quran.net/afs/110.mp3"],//110
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/111.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/111.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/111.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/111.mp3", "https://server8.mp3quran.net/bna/111.mp3", "https://server10.mp3quran.net/ajm/128/111.mp3", "https://server11.mp3quran.net/sds/111.mp3", "https://server12.mp3quran.net/maher/111.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/111.mp3", "https://server8.mp3quran.net/afs/0111.mp3"],//111
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/112.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/112.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/112.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/112.mp3", "https://server8.mp3quran.net/bna/112.mp3", "https://server10.mp3quran.net/ajm/128/112.mp3", "https://server11.mp3quran.net/sds/112.mp3", "https://server12.mp3quran.net/maher/112.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/112.mp3", "https://server8.mp3quran.net/afs/112.mp3"],//112
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/113.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/113.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/113.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/113.mp3", "https://server8.mp3quran.net/bna/113.mp3", "https://server10.mp3quran.net/ajm/128/113.mp3", "https://server11.mp3quran.net/sds/113.mp3", "https://server12.mp3quran.net/maher/113.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/113.mp3", "https://server8.mp3quran.net/afs/113.mp3"],//113
  ["https://ia801002.us.archive.org/14/items/golmami2005_yahoo_002_20180409_1406/114.mp3", "https://server7.mp3quran.net/basit/Almusshaf-Al-Mojawwad/114.mp3", "https://server10.mp3quran.net/minsh/Almusshaf-Al-Mojawwad/114.mp3", "https://server13.mp3quran.net/husr/Almusshaf-Al-Mojawwad/114.mp3", "https://server8.mp3quran.net/bna/114.mp3", "https://server10.mp3quran.net/ajm/128/114.mp3", "https://server11.mp3quran.net/sds/114.mp3", "https://server12.mp3quran.net/maher/114.mp3", "https://ia801208.us.archive.org/33/items/Quran-Huzza-Al_Baloushi/114.mp3", "https://server8.mp3quran.net/afs/114.mp3"]//114
];

// إضافة روابط الصور للأقسام
const firstTenSectionImages = [
  "img/mostafa.jpg", "img/abdoo.jpg", "img/Sedeq.jpg", "img/hosery.jpg", "img/bana.jpg", "img/agmy1.jpg", "img/sodes.jpg", "img/moeqlyi.jpeg", "img/bloshy . jpg", "img/mshary.jpg"

];

const App = () => {
  const [activeSection, setActiveSection] = useState('quran');
  const [activeSurahIndex, setActiveSurahIndex] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSidebarSection, setActiveSidebarSection] = useState(null);
  const [activeAzkarContent, setActiveAzkarContent] = useState(null);

  const toggleSection = (section) => {
    setActiveSection(activeSection === section ? null : section);
    setActiveSurahIndex(null);
    setActiveAzkarContent(null);
  };

  const showSurah = (index) => {
    setActiveSurahIndex(index);
  };

  const closeSurah = () => {
    setActiveSurahIndex(null);
    if (audioInstance) {
      audioInstance.pause();
      setActiveAudio(null);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    setActiveSidebarSection(null);
  };

  const handleSidebarSectionClick = (section) => {
    if (section === 'logout') {
      closeWindow();
    } else {
      setActiveSidebarSection(activeSidebarSection === section ? null : section);
    }
  };

  const closeWindow = () => {
    window.open('about:blank', '_self').close();
  };
  const handleAzkarClick = (section) => {
    setActiveAzkarContent(section);
  };

  const sectionImages = Array(114).fill(firstTenSectionImages);
  const [activeAudio, setActiveAudio] = useState(null);
  const [audioInstance, setAudioInstance] = useState([]);
  const playAudio = (audioUrl, index) => {
    if (activeAudio === index && audioInstance) {
      if (audioInstance.paused) {
        audioInstance.play();
      } else {
        audioInstance.pause();
        setActiveAudio(null);
        setAudioInstance(null);
      }
    } else {
      if (audioInstance) {
        audioInstance.pause();
      }
      const audio = new Audio(audioUrl);
      audio.play();
      setActiveAudio(index);
      setAudioInstance(audio);
    }
  };


  const handleBackToAzkar = () => {
    setActiveAzkarContent(null);
  };

  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="container mx-auto p-4 background-image">
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button className="text-yellow-500 icon" onClick={toggleSidebar}>
            <div className="space-y-1">
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
              <div className="w-5 h-0.5 bg-white"></div>
            </div>
          </button>
          <h1 className="text-white text-sm sm:text-lg md:text-xl lg:text-2xl xl:text-3xl whitespace-nowrap">
            الطريق إلى الجنة
          </h1>
        </div>
        <div className="flex space-x-2 sm:space-x-4">
          <button className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg icon" onClick={() => toggleSection('quran')}>القرآن الكريم</button>
          <button className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg icon " onClick={() => toggleSection('azkar')}>الأذكار</button>
          <button className="text-yellow-500 text-xs sm:text-sm md:text-base lg:text-lg icon " onClick={() => toggleSection('misbaha')}>المسبحة الإلكترونية</button>
        </div>
      </div>
      {isSidebarOpen && (
        <div className="absolute top-16 left-0 w-80 bg-white z-50 ">
          <button className="close-button" onClick={toggleSidebar}>×</button>
          <ul className="flex flex-col p-4 space-y-2">
            <li className="text-xl cursor-pointer sidebar-section about" onClick={() => handleSidebarSectionClick('about')}>عن الموقع</li>
            {activeSidebarSection === 'about' && (
              <div className="text-sm p-2   ">
                <strong>مقدمة:</strong>
                <p>هذا موقع ديني يحتوي على القرآن الكريم بالكامل ويحتوي أيضا على جميع الأذكار والأدعية بالإضافة إلى وجود مسبحة إلكترونية للتسبيح.</p>
                <strong>أهداف الموقع:</strong>
                <ol>
                  <li>1- يهدف هذا الموقع إلى التيسير على جميع المسلمين للوصول إلى القرآن الكريم والأذكار والمسبحة الإلكترونية في موقع واحد بدلا من التنقل بين التطبيقات أو الصفحات الأخرى</li>
                  <li>2- صدقة جارية على روح        </li>
                  <div className="flex space-x-4">
                    <div className="text-center">
                      <img src="img/baba.jpg" className="w-16 h-20 rounded-full mx-auto mb-2" />
                      <li> والدي الغالي الحاج إسماعيل إبراهيم العناني</li>
                    </div>
                    <div className="text-center">
                      <img src="img/bro.jpg" className="w-16 h-20 rounded-full mx-auto mb-2" />
                      <li> أخي محمود اسماعيل العناني</li>
                    </div>
                    <div className="text-center">
                      <img src="img/hema.jpg" className="w-16 h-20 rounded-full mx-auto mb-2" />
                      <li> الأستاذ إبراهيم المأذون</li>
                    </div>
                  </div>
                </ol>
              </div>
            )}
            <li className="text-xl cursor-pointer sidebar-section developer" onClick={() => handleSidebarSectionClick('developer')}>مطور الموقع</li>
            {activeSidebarSection === 'developer' && (
              <div className="text-sm p-2">
                <img
                  src="img/mos.jpg"
                  alt="مطور الموقع"
                  style={{ width: '100px', height: '140px', objectFit: 'cover' }}
                  className="rounded-full mx-auto mb-2"
                />
                <div className="developer-name ">Mostafa Ismail Alanani</div>
                <div className="flex justify-center">
                  <a href="https://wa.me/+201066915691" target="_blank"><i className="fab fa-whatsapp fa-2x"></i></a>
                  <a href="https://www.facebook.com/mostafa.enani.71" target="_blank"><i className="fab fa-facebook fa-2x"></i></a>
                  <a href="https://t.me/asmaylmr" target="_blank"><i className="fab fa-telegram fa-2x"></i></a>
                  <a href="tel:+20155884327" target="_blank"><i className="fas fa-phone fa-2x"></i></a>
                </div>
              </div>
            )}
            <li className="text-xl cursor-pointer sidebar-section logout" onClick={() => handleSidebarSectionClick('logout')}>الخروج</li>
          </ul>
        </div>
      )}
      {activeSection === 'quran' && activeSurahIndex === null && (
        <div className="mt-4 p-4 bg-white bg-opacity-10 text-center shadow-md">
          <h2 className="text-2xl mb-4 text-white ">القرآن الكريم</h2>
          <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {surahNames.map((surah, index) => (
              <div
                key={index}
                className="section p-2 bg-gray-900 bg-opacity-80  rounded cursor-pointer text-center text-white"
                onClick={() => showSurah(index)}
              >
                {surah}
              </div>
            ))}
          </div>
        </div>
      )}
      {activeSection === 'quran' && activeSurahIndex !== null && (
        <div className="mt-4 p-4 bg-white bg-opacity-10  shadow-md relative">
          <button className="close-button" onClick={closeSurah}>×</button>
          <h2 className="text-2xl text-white  mb-4 text-center ">{surahNames[activeSurahIndex]}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 mb-4">
            {sectionImages[activeSurahIndex].map((image, index) => (
              <div key={index} className="relative cursor-pointer">
                <img src={image} alt={`Section ${index + 1}`} className="w-full h-auto object-cover rounded-lg aspect-[16/9]" />
                <audio controls className="w-full mt-2">
                  <source src={sectionAudio[activeSurahIndex][index]} type="audio/mpeg" />
                  Your browser does not support the audio element.
                </audio>
              </div>
            ))}
          </div>
          <iframe
            src={`https://drive.google.com/file/d/${surahPdfs[activeSurahIndex].split('/d/')[1].split('/view')[0]}/preview`}
            width="100%"
            height="600px"
            className="border  "
          ></iframe>
        </div>
      )}
      <div className="container mx-auto p-4">
        {activeSection === 'azkar' && activeAzkarContent === null && (
          <div className="mt-4 p-4 bg-white bg-opacity-10  shadow-md">
            <h2 className="text-2xl mb-4 text-white text-center  ">الأذكار</h2>
            <div className="grid grid-cols-2 gap-4 ">
              {azkarSections.map(section => (
                <div
                  key={section.id}
                  className="azkar-section p-4 bg-green-500 text-white text-center cursor-pointer transition-transform duration-300"
                  onClick={() => handleAzkarClick(section.id)}
                >
                  <div className="text-4xl">{section.icon}</div>
                  <div className="mt-2 text-xl">{section.name}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeSection === 'azkar' && activeAzkarContent && (
          <div id="so" className="relative mt-4 p-4 bg-white bg-opacity-70  shadow-md">
            <button className="absolute top-2 right-2 text-red-500 text-2xl" onClick={handleBackToAzkar}>×</button>

            {activeAzkarContent === 'morning' && (
              <>
                <h2 className="text-2xl mb-4">أذكار الصباح</h2>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح
                </div>
                <br></br>
                <hr></hr>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل هو ٱلله أحد، ٱلله ٱلصمد، لم يلد ولم يولد، ولم يكن لهۥ كفوا أحدۢ
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)
                </div>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفٰثٰت فى ٱلعقد، ومن شر حاسد إذا حسد.
                </div>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل أعوذ برب ٱلناس، ملك ٱلناس، إلٰه ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  أصـبحنا وأصـبح المـلك لله والحمد لله ، لا إله إلا الله وحده لا شريك له، له المـلك وله الحمـد، وهو على كل شيء قدير ، رب أسـألـك خـير ما في هـذا اليوم وخـير ما بعـده ، وأعـوذ بك من شـر ما في هـذا اليوم وشر ما بعـده، رب أعـوذبك من الكسـل وسـوء الكـبر ، رب أعـوذ بك من عـذاب في النـار وعـذاب في القـبر.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم أنت ربـي لا إله إلا أنت ، خلقتنـي وأنا عبـدك ، وأنا علـى عهـدك ووعـدك ما استـطعـت ، أعـوذبك من شـر ما صنـعت ، أبـوء لـك بنعـمتـك علـي وأبـوء بذنـبي فاغفـر لي فإنـه لا يغـفر الذنـوب إلا أنت .
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  رضيـت بالله ربـا وبالإسلام ديـنا وبمحـمد صلى الله عليه وسلم نبيـا
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم إنـي أصبـحت أشـهدك ، وأشـهد حملـة عـرشـك ، وملائكتك ، وجمـيع خلـقك ، أنـك أنـت الله لا إله إلا أنـت وحـدك لا شريك لـك ، وأن محمـدا عبـدك ورسـولـك.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها أعتقه الله من النار
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم ما أصبـح بي مـن نعـمة أو بأحـد مـن خلـقك ، فمـنك وحـدك لا شريك لـك ، فلـك الحمـد ولـك الشكـر.

                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها حين يصبح أدى شكر يومه
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  حسبـي الله لا إله إلا هو علـيه توكـلت وهو رب العرش العظـيم

                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  بسـم الله الذي لا يضـر مع اسمـه شيء في الأرض ولا في السمـاء وهـو السمـيع العلـيم
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها لم يضره من الله شيء
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم بك أصـبحنا وبك أمسـينا ، وبك نحـيا وبك نمـوت وإلـيك النـشور
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  أصبـحـنا على فطرة الإسلام، وعلى كلمة الإخلاص، وعلى دين نبينا محمد صلى الله عليه وسلم، وعلى ملة أبينا إبراهيم حنيفا مسلما وما كان من المشركين.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  سبحـان الله وبحمـده عدد خلـقه ، ورضـا نفسـه ، وزنـة عـرشـه ، ومـداد كلمـاتـه
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم عافـني في بدنـي ، اللهـم عافـني في سمـعي ، اللهـم عافـني في بصـري ، لا إله إلا أنـت.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم إنـي أعـوذ بك من الكـفر ، والفـقر ، وأعـوذ بك من عذاب القـبر ، لا إله إلا أنـت
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم إنـي أسـألـك العـفو والعـافـية في الدنـيا والآخـرة ، اللهـم إنـي أسـألـك العـفو والعـافـية في ديني ودنـياي وأهـلي ومالـي ، اللهـم استـر عـوراتي وآمـن روعاتـي ، اللهـم احفظـني من بـين يدي ومن خلفـي وعن يمـيني وعن شمـالي ، ومن فوقـي ، وأعـوذ بعظمـتك أن أغـتال من تحتـي.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  يا حي يا قيوم برحمتك أستغيث أصلح لي شأني كله ولا تكلني إلى نفسي طـرفة عين
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  أصبـحـنا وأصبـح المـلك لله رب العـالمـين ، اللهـم إنـي أسـألـك خـير هـذا الـيوم ، فـتحه ، ونصـره ، ونـوره وبـركتـه ، وهـداه ، وأعـوذ بـك مـن شـر ما فـيه وشـر ما بعـده.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم عالـم الغـيب والشـهادة فاطـر السماوات والأرض رب كـل شـيء ومليـكه ، أشهـد أن لا إلـه إلا أنت ، أعـوذ بك من شـر نفسـي ومن شـر الشيـطان وشركه ، وأن أقتـرف علـى نفسـي سوءا أو أجـره إلـى مسـلم.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  أعـوذ بكلمـات الله التـامـات من شـر ما خلـق
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهم صل وسلم وبارك على نبينا محمد
                </div>
                <br></br>
                <hr></hr>

                <div className="text-black text-xl">
                  اللهم إنا نعوذ بك من أن نشرك بك شيئا نعلمه ، ونستغفرك لما لا نعلمه.
                  <br></br>
                  <hr></hr>

                  اللهم إني أعوذ بك من الهم والحزن، وأعوذ بك من العجز والكسل، وأعوذ بك من الجبن والبخل، وأعوذ بك من غلبة الدين، وقهر الرجال.

                  <br></br>
                  <br></br>
                  <hr></hr>
                  أستغفر الله العظيم الذي لا إله إلا هو، الحي القيوم، وأتوب إليه.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  يا رب , لك الحمد كما ينبغي لجلال وجهك , ولعظيم سلطانك.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  اللهم إني أسألك علما نافعا، ورزقا طيبا، وعملا متقبلا.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  اللهم أنت ربي لا إله إلا أنت ، عليك توكلت ، وأنت رب العرش العظيم , ما شاء الله كان ، وما لم يشأ لم يكن ، ولا حول ولا قوة إلا بالله العلي العظيم , أعلم أن الله على كل شيء قدير ، وأن الله قد أحاط بكل شيء علما , اللهم إني أعوذ بك من شر نفسي ، ومن شر كل دابة أنت آخذ بناصيتها ، إن ربي على صراط مستقيم.

                  <br></br>
                  <br></br>
                  <hr></hr>
                  لا إله إلا الله وحده لا شريك له، له الملك وله الحمد وهو على كل شيء قدير.

                  <br></br>
                  <br></br>
                  <hr></hr>
                  سبحـان الله وبحمـده.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  أستغفر الله وأتوب إليه


                </div>
                <br></br>
                <hr></hr>

              </>
            )}

            {activeAzkarContent === 'evening' && (
              <>
                <h2 className="text-2xl mb-4">أذكار المساء</h2>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها حين يصبح أجير من الجن حتى يمسى ومن قالها حين يمسى أجير من الجن حتى يصبح
                </div>
                <br></br>
                <hr></hr>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل هو ٱلله أحد، ٱلله ٱلصمد، لم يلد ولم يولد، ولم يكن لهۥ كفوا أحدۢ
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  من قالها حين يصبح وحين يمسى كفته من كل شىء (الإخلاص والمعوذتين)
                </div>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفٰثٰت فى ٱلعقد، ومن شر حاسد إذا حسد.
                </div>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل أعوذ برب ٱلناس، ملك ٱلناس، إلٰه ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  أَمْسَيْـنا وَأَمْسـى المـلكُ لله وَالحَمدُ لله ، لا إلهَ إلاّ اللّهُ وَحدَهُ لا شَريكَ لهُ، لهُ المُـلكُ ولهُ الحَمْـد، وهُوَ على كلّ شَيءٍ قدير ، رَبِّ أسْـأَلُـكَ خَـيرَ ما في هـذهِ اللَّـيْلَةِ وَخَـيرَ ما بَعْـدَهـا ، وَأَعـوذُ بِكَ مِنْ شَـرِّ ما في هـذهِ اللَّـيْلةِ وَشَرِّ ما بَعْـدَهـا ، رَبِّ أَعـوذُبِكَ مِنَ الْكَسَـلِ وَسـوءِ الْكِـبَر ، رَبِّ أَعـوذُ بِكَ مِنْ عَـذابٍ في النّـارِ وَعَـذابٍ في القَـبْر.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهـمَّ أَنْتَ رَبِّـي لا إلهَ إلاّ أَنْتَ ، خَلَقْتَنـي وَأَنا عَبْـدُك ، وَأَنا عَلـى عَهْـدِكَ وَوَعْـدِكَ ما اسْتَـطَعْـت ، أَعـوذُبِكَ مِنْ شَـرِّ ما صَنَـعْت ، أَبـوءُ لَـكَ بِنِعْـمَتِـكَ عَلَـيَّ وَأَبـوءُ بِذَنْـبي فَاغْفـِرْ لي فَإِنَّـهُ لا يَغْـفِرُ الذُّنـوبَ إِلاّ أَنْتَ .
                  من قالها موقنا بها حين يمسى ومات من ليلته دخل الجنة وكذلك حين يصبح.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  رَضيـتُ بِاللهِ رَبَّـاً وَبِالإسْلامِ ديـناً وَبِمُحَـمَّدٍ صلى الله عليه وسلم نَبِيّـاً.
                  من قالها حين يصبح وحين يمسى كان حقا على الله أن يرضيه يوم القيامة.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهُـمَّ إِنِّـي أَمسيتُ أُشْـهِدُك ، وَأُشْـهِدُ حَمَلَـةَ عَـرْشِـك ، وَمَلَائِكَتَكَ ، وَجَمـيعَ خَلْـقِك ، أَنَّـكَ أَنْـتَ اللهُ لا إلهَ إلاّ أَنْـتَ وَحْـدَكَ لا شَريكَ لَـك ، وَأَنَّ ُ مُحَمّـداً عَبْـدُكَ وَرَسـولُـك.
                  من قالها أعتقه الله من النار.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهُـمَّ ما أَمسى بي مِـنْ نِعْـمَةٍ أَو بِأَحَـدٍ مِـنْ خَلْـقِك ، فَمِـنْكَ وَحْـدَكَ لا شريكَ لَـك ، فَلَـكَ الْحَمْـدُ وَلَـكَ الشُّكْـر.
                  من قالها حين يمسى أدى شكر يومه.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  حَسْبِـيَ اللّهُ لا إلهَ إلاّ هُوَ عَلَـيهِ تَوَكَّـلتُ وَهُوَ رَبُّ العَرْشِ العَظـيم.
                  من قالها كفاه الله ما أهمه من أمر الدنيا والأخرة.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  بِسـمِ اللهِ الذي لا يَضُـرُّ مَعَ اسمِـهِ شَيءٌ في الأرْضِ وَلا في السّمـاءِ وَهـوَ السّمـيعُ العَلـيم.
                  لم يضره من الله شيء.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهُـمَّ بِكَ أَمْسَـينا وَبِكَ أَصْـبَحْنا، وَبِكَ نَحْـيا وَبِكَ نَمُـوتُ وَإِلَـيْكَ الْمَصِيرُ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  أَمْسَيْنَا عَلَى فِطْرَةِ الإسْلاَمِ، وَعَلَى كَلِمَةِ الإِخْلاَصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إبْرَاهِيمَ حَنِيفاً مُسْلِماً وَمَا كَانَ مِنَ المُشْرِكِينَ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  سُبْحـانَ اللهِ وَبِحَمْـدِهِ عَدَدَ خَلْـقِه ، وَرِضـا نَفْسِـه ، وَزِنَـةَ عَـرْشِـه ، وَمِـدادَ كَلِمـاتِـه.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهُـمَّ عافِـني في بَدَنـي ، اللّهُـمَّ عافِـني في سَمْـعي ، اللّهُـمَّ عافِـني في بَصَـري ، لا إلهَ إلاّ أَنْـتَ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهُـمَّ إِنّـي أَعـوذُ بِكَ مِنَ الْكُـفر ، وَالفَـقْر ، وَأَعـوذُ بِكَ مِنْ عَذابِ القَـبْر ، لا إلهَ إلاّ أَنْـتَ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في الدُّنْـيا وَالآخِـرَة ، اللّهُـمَّ إِنِّـي أسْـأَلُـكَ العَـفْوَ وَالعـافِـيةَ في ديني وَدُنْـيايَ وَأهْـلي وَمالـي ، اللّهُـمَّ اسْتُـرْ عـوْراتي وَآمِـنْ رَوْعاتـي ، اللّهُـمَّ احْفَظْـني مِن بَـينِ يَدَيَّ وَمِن خَلْفـي وَعَن يَمـيني وَعَن شِمـالي ، وَمِن فَوْقـي ، وَأَعـوذُ بِعَظَمَـتِكَ أَن أُغْـتالَ مِن تَحْتـي.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  يَا حَيُّ يَا قيُّومُ بِرَحْمَتِكَ أسْتَغِيثُ أصْلِحْ لِي شَأنِي كُلَّهُ وَلاَ تَكِلْنِي إلَى نَفْسِي طَـرْفَةَ عَيْنٍ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  أَمْسَيْنا وَأَمْسَى الْمُلْكُ للهِ رَبِّ الْعَالَمَيْنِ، اللَّهُمَّ إِنَّي أسْأَلُكَ خَيْرَ هَذَه اللَّيْلَةِ فَتْحَهَا ونَصْرَهَا، ونُوْرَهَا وبَرَكَتهَا، وَهُدَاهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فيهِا وَشَرَّ مَا بَعْدَهَا.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللّهُـمَّ عالِـمَ الغَـيْبِ وَالشّـهادَةِ فاطِـرَ السّماواتِ وَالأرْضِ رَبَّ كـلِّ شَـيءٍ وَمَليـكَه ، أَشْهَـدُ أَنْ لا إِلـهَ إِلاّ أَنْت ، أَعـوذُ بِكَ مِن شَـرِّ نَفْسـي وَمِن شَـرِّ الشَّيْـطانِ وَشِرْكِهِ ، وَأَنْ أَقْتَـرِفَ عَلـى نَفْسـي سوءاً أَوْ أَجُـرَّهُ إِلـى مُسْـلِم.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  أَعـوذُ بِكَلِمـاتِ اللّهِ التّـامّـاتِ مِنْ شَـرِّ ما خَلَـق.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللَّهُمَّ صَلِّ وَسَلِّمْ وَبَارِكْ على نَبِيِّنَا مُحمَّد.
                  من صلى على حين يصبح وحين يمسى ادركته شفاعتى يوم القيامة.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللَّهُمَّ إِنَّا نَعُوذُ بِكَ مِنْ أَنْ نُشْرِكَ بِكَ شَيْئًا نَعْلَمُهُ ، وَنَسْتَغْفِرُكَ لِمَا لَا نَعْلَمُهُ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ الْهَمِّ وَالْحَزَنِ، وَأَعُوذُ بِكَ مِنْ الْعَجْزِ وَالْكَسَلِ، وَأَعُوذُ بِكَ مِنْ الْجُبْنِ وَالْبُخْلِ، وَأَعُوذُ بِكَ مِنْ غَلَبَةِ الدَّيْنِ، وَقَهْرِ الرِّجَالِ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  أسْتَغْفِرُ اللهَ العَظِيمَ الَّذِي لاَ إلَهَ إلاَّ هُوَ، الحَيُّ القَيُّومُ، وَأتُوبُ إلَيهِ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  يَا رَبِّ , لَكَ الْحَمْدُ كَمَا يَنْبَغِي لِجَلَالِ وَجْهِكَ , وَلِعَظِيمِ سُلْطَانِكَ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  لَا إلَه إلّا اللهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءِ قَدِيرِ.
                  كانت له عدل عشر رقاب، وكتبت له مئة حسنة، ومحيت عنه مئة سيئة، وكانت له حرزا من الشيطان.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  اللَّهُمَّ أَنْتَ رَبِّي لا إِلَهَ إِلا أَنْتَ ، عَلَيْكَ تَوَكَّلْتُ ، وَأَنْتَ رَبُّ الْعَرْشِ الْعَظِيمِ , مَا شَاءَ اللَّهُ كَانَ ، وَمَا لَمْ يَشَأْ لَمْ يَكُنْ ، وَلا حَوْلَ وَلا قُوَّةَ إِلا بِاللَّهِ الْعَلِيِّ الْعَظِيمِ , أَعْلَمُ أَنَّ اللَّهَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ ، وَأَنَّ اللَّهَ قَدْ أَحَاطَ بِكُلِّ شَيْءٍ عِلْمًا , اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي ، وَمِنْ شَرِّ كُلِّ دَابَّةٍ أَنْتَ آخِذٌ بِنَاصِيَتِهَا ، إِنَّ رَبِّي عَلَى صِرَاطٍ مُسْتَقِيمٍ.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  سُبْحـانَ اللهِ وَبِحَمْـدِهِ.
                </div>
              </>
            )}

            {activeAzkarContent === 'prayer' && (
              <>
                <h2 className="text-2xl mb-4">أذكار بعد الصلاة</h2>

                <div className="text-red-500 text-xl mb-4">أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله، أَسْـتَغْفِرُ الله.</div>
                <div className="text-black text-xl mt-4">
                  اللّهُـمَّ أَنْـتَ السَّلامُ ، وَمِـنْكَ السَّلام ، تَبارَكْتَ يا ذا الجَـلالِ وَالإِكْـرام
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  مره واحده فقط
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl mt-4">
                  لا إلهَ إلاّ اللّهُ وحدَهُ لا شريكَ لهُ، لهُ المُـلْكُ ولهُ الحَمْد، وهوَ على كلّ شَيءٍ قَدير، اللّهُـمَّ لا مانِعَ لِما أَعْطَـيْت، وَلا مُعْطِـيَ لِما مَنَـعْت، وَلا يَنْفَـعُ ذا الجَـدِّ مِنْـكَ الجَـد.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  مره واحده فقط
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl mt-4">
                  لا إلهَ إلاّ اللّـه, وحدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمد، وهوَ على كلّ شيءٍ قدير، لا حَـوْلَ وَلا قـوَّةَ إِلاّ بِاللهِ، لا إلهَ إلاّ اللّـه، وَلا نَعْـبُـدُ إِلاّ إيّـاه, لَهُ النِّعْـمَةُ وَلَهُ الفَضْل وَلَهُ الثَّـناءُ الحَـسَن، لا إلهَ إلاّ اللّهُ مخْلِصـينَ لَـهُ الدِّينَ وَلَوْ كَـرِهَ الكـافِرون.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  مره واحده فقط
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl mt-4">
                  سُـبْحانَ اللهِ، والحَمْـدُ لله ، واللهُ أكْـبَر.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  ثلاثا وثلاثين مره
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl mt-4">
                  لا إلهَ إلاّ اللّهُ وَحْـدَهُ لا شريكَ لهُ، لهُ الملكُ ولهُ الحَمْد، وهُوَ على كُلّ شَيءٍ قَـدير.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  مره واحده فقط
                </div>
                <br></br>
                <hr></hr>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قُلْ هُوَ ٱللَّهُ أَحَدٌ، ٱللَّهُ ٱلصَّمَدُ، لَمْ يَلِدْ وَلَمْ يُولَدْ، وَلَمْ يَكُن لَّهُۥ كُفُوًا أَحَدٌۢ.
                </div>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل أعوذ برب ٱلفلق، من شر ما خلق، ومن شر غاسق إذا وقب، ومن شر ٱلنفٰثٰت فى ٱلعقد، ومن شر حاسد إذا حسد.

                </div>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  قل أعوذ برب ٱلناس، ملك ٱلناس، إلٰه ٱلناس، من شر ٱلوسواس ٱلخناس، ٱلذى يوسوس فى صدور ٱلناس، من ٱلجنة وٱلناس.

                </div>
                <div className="text-gray-500 text-xl mt-4">
                  ثلاث مرات بعد صلاتي الفجر والمغرب. ومرة بعد الصلوات الأخرى.
                </div>
                <br></br>
                <hr></hr>
                <div className="text-red-500 text-xl mt-4">
                  بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                </div>
                <div className="text-black text-xl">
                  الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  مره واحده فقط
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  لا إله إلا الله وحـده لا شريك له، له الملك وله الحمد، يحيـي ويمـيت وهو على كل شيء قدير
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  عشر مرات بعد المغرب والصـبح
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهـم إنـي أسألـك علمـا نافعـا ورزقـا طيـبا ، وعمـلا متقـبلا.
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  بعد السلام من صلاة الفجر
                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهم أجرني من النار
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  بعد صلاة الصبح والمغرب

                </div>
                <br></br>
                <hr></hr>
                <div className="text-black text-xl">
                  اللهم أعني على ذكرك وشكرك وحسن عبادتك
                </div>
                <div className="text-gray-500 text-xl mt-4">
                  مره واحده فقط
                </div>
                <br></br>
                <hr></hr>
              </>
            )}

            {activeAzkarContent === 'sleep' && (
              <>
                <h2 className="text-2xl mb-4">أذكار النوم</h2>
                <div className="text-black text-xl">

                  باسمك ربـي وضعـت جنـبي ، وبك أرفعـه، فإن أمسـكت نفسـي فارحـمها ، وإن أرسلتـها فاحفظـها بمـا تحفـظ به عبـادك الصـالحـين.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  اللهـم إنـك خلـقت نفسـي وأنـت توفـاهـا لك ممـاتـها ومحـياها ، إن أحييـتها فاحفظـها ، وإن أمتـها فاغفـر لـها . اللهـم إنـي أسـألـك العـافـية.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  اللهـم قنـي عذابـك يـوم تبـعث عبـادك.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  باسـمك اللهـم أمـوت وأحـيا.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  الـحمد لله الذي أطـعمنا وسقـانا، وكفـانا، وآوانا، فكـم ممـن لا كـافي لـه ولا مـؤوي
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  اللهـم عالـم الغـيب والشـهادة فاطـر السماوات والأرض رب كـل شـيء ومليـكه، أشهـد أن لا إلـه إلا أنت، أعـوذ بك من شـر نفسـي، ومن شـر الشيـطان وشـركه، وأن أقتـرف علـى نفسـي سوءا أو أجـره إلـى مسـلم .
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  اللهـم أسـلمت نفـسي إلـيك، وفوضـت أمـري إلـيك، ووجـهت وجـهي إلـيك، وألـجـات ظهـري إلـيك، رغبـة ورهـبة إلـيك، لا ملجـأ ولا منـجـا منـك إلا إلـيك، آمنـت بكتـابك الـذي أنزلـت وبنبـيـك الـذي أرسلـت
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>


                  سبحان الله.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  الحمد لله.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  الله أكبر.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <div className="text-red-500 text-xl mt-4">
                    بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                  </div>
                  <div className="text-black text-xl">
                    آمَنَ الرَّسُولُ بِمَا أُنْزِلَ إِلَيْهِ مِنْ رَبِّهِ وَالْمُؤْمِنُونَ ۚ كُلٌّ آمَنَ بِاللَّهِ وَمَلَائِكَتِهِ وَكُتُبِهِ وَرُسُلِهِ لَا نُفَرِّقُ بَيْنَ أَحَدٍ مِنْ رُسُلِهِ ۚ وَقَالُوا سَمِعْنَا وَأَطَعْنَا ۖ غُفْرَانَكَ رَبَّنَا وَإِلَيْكَ الْمَصِيرُ. لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ رَبَّنَا لَا تُؤَاخِذْنَا إِنْ نَّسِينَآ أَوْ أَخْطَأْنَا رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِنْ قَبْلِنَا رَبَّنَا وَلَا تُحَمِّلْنَا مَا لَا طَاقَةَ لَنَا بِهِ وَاعْفُ عَنَّا وَاغْفِرْ لَنَا وَارْحَمْنَا أَنْتَ مَوْلَانَا فَانْصُرْنَا عَلَى الْقَوْمِ الْكَافِرِينَ
                  </div>
                  <div className="text-gray-500 text-xl mt-4">
                    من قرأ آيتين من آخر سورة البقرة في ليلة كفتاه.
                  </div>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <div className="text-red-500 text-xl mt-4">
                    بِسْمِ اللهِ الرَّحْمنِ الرَّحِيم
                  </div>
                  <div className="text-black text-xl">
                    الله لا إلـه إلا هو الحي القيوم لا تأخذه سنة ولا نوم له ما في السماوات وما في الأرض من ذا الذي يشفع عنده إلا بإذنه يعلم ما بين أيديهم وما خلفهم ولا يحيطون بشيء من علمه إلا بما شاء وسع كرسيه السماوات والأرض ولا يؤوده حفظهما وهو العلي العظيم.
                  </div>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <div className="text-red-500 text-xl mt-4">
                    أذكار من قلق في فراشه ولم ينم
                  </div>
                  <div className="text-black text-xl">
                    عن بريدة رضي الله عنه، قال‏:‏ شكا خالد بن الوليد رضي الله عنه إلى النبي صلى الله عليه وسلم فقال‏:‏ يا رسول الله‏!‏ ما أنام الليل من الأرق، فقال النبي صلى الله عليه وسلم‏:‏ ‏"‏إذا أويت إلى فراشك فقل‏:‏ اللهم رب السموات السبع وما أظلت، ورب الأرضين وما أقلت، ورب الشياطين وما أضلت، كن لي جارا من خلقك كلهم جميعا أن يفرط علي أحد منهم أو أن يبغي علي، عز جارك، وجل ثناؤك ولا إله غيرك، ولا إله إلا أنت‏"

                    عن عمرو بن شعيب، عن أبيه، عن جده: أن رسول الله صلى الله عليه وسلم كان يعلمهم من الفزع كلمات‏:‏ ‏"‏أعوذ بكلمات الله التامة من غضبه وشر عباده، ومن همزات الشياطين وأن يحضرون‏"
                  </div>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <div className="text-red-500 text-xl mt-4">
                    أذكار الأحلام
                  </div>
                  <div className="text-black text-xl">
                    عن أبي قتادة رضي الله عنه قال‏:‏ قال رسول الله صلى الله عليه وسلم‏:‏ ‏"‏الرؤيا الصالحة‏"‏ وفي رواية ‏"‏الرؤيا الحسنة من الله، والحلم من الشيطان، فمن رأى شيئا يكرهه فلينفث عن شماله ثلاثا وليتعوذ من الشيطان، فإنها لا تضره‏"
                  </div>
                </div>
              </>
            )}

            {activeAzkarContent === 'wake' && (
              <>
                <h2 className="text-2xl mb-4">أذكار الاستيقاظ</h2>

                <div className="text-black text-xl">
                  الحمـد لله الذي أحـيانا بعـد ما أماتـنا وإليه النـشور.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  الحمد لله الذي عافاني في جسدي ورد علي روحي وأذن لي بذكره.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  لا إله إلا الله وحـده لا شـريك له، له الملـك وله الحمـد، وهو على كل شيء قدير، سـبحان الله، والحمـد لله ، ولا إله إلا الله والله أكبر، ولا حول ولا قوة إلا بالله العلي العظيم. رب اغفر لي.
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                </div>

              </>
            )}
            {activeAzkarContent === 'doa' && (
              <>

                <h1 className="text-red-500">الْأدْعِيَةُ القرآنية</h1>
                <div className="text-black text-xl">

                  "ربنا آتنا في الدنيا حسنة وفي الآخرة حسنة وقنا عذاب النار"
                  <br></br>
                  [البقرة - 201].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا أفرغ علينا صبرا وثبت أقدامنا وانصرنا على القوم الكافرين"
                  <br></br>
                  [البقرة - 250].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا لا تؤاخذنا إن نسينا أو أخطأنا ربنا ولا تحمل علينا إصرا كما حملته على الذين من قبلنا ربنا ولا تحملنا ما لا طاقة لنا به واعف عنا واغفر لنا وارحمنا أنت مولانا فانصرنا على القوم الكافرين"
                  <br></br>
                  [البقرة - 286].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>


                  "ربنا لا تزغ قلوبنا بعد إذ هديتنا وهب لنا من لدنك رحمة إنك أنت الوهاب"
                  <br></br>
                  [آل عمران - 8].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>


                  "ربنا إننا آمنا فاغفر لنا ذنوبنا وقنا عذاب النار"
                  <br></br>
                  [آل عمران - 16].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "رب هب لي من لدنك ذرية طيبة إنك سميع الدعاء"
                  <br></br>
                  [آل عمران - 38].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  "ربنا آمنا بما أنزلت واتبعنا الرسول فاكتبنا مع الشاهدين"
                  <br></br>
                  [آل عمران - 53].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا اغفر لنا ذنوبنا وإسرافنا في أمرنا وثبت أقدامنا وانصرنا على القوم الكافرين"
                  <br></br>
                  [آل عمران - 147].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا ما خلقت هذا باطلا سبحانك فقنا عذاب النار ربنا إنك من تدخل النار فقد أخزيته وما للظالمين من أنصار ربنا إننا سمعنا مناديا ينادي للإيمان أن آمنوا بربكم فآمنا ربنا فاغفر لنا ذنوبنا وكفر عنا سيئاتنا وتوفنا مع الأبرار ربنا وآتنا ما وعدتنا على رسلك ولا تخزنا يوم القيامة إنك لا تخلف الميعاد".
                  <br></br>
                  [آل عمران -  191-194].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا ظلمنا أنفسنا وإن لم تغفر لنا وترحمنا لنكونن من الخاسرين"
                  <br></br>
                  [الأعراف - 23].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا لا تجعلنا مع القوم الظالمين"
                  <br></br>
                  [الأعراف - 47].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا أفرغ علينا صبرا وتوفنا مسلمين"
                  <br></br>
                  [الأعراف - 126].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "حسبي الله لا إلـه إلا هو عليه توكلت وهو رب العرش العظيم"
                  <br></br>
                  [التوبة - 129].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا لا تجعلنا فتنة للقوم الظالمين ونجنا برحمتك من القوم الكافرين"
                  <br></br>
                  [يونس - 85-86].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "رب إني أعوذ بك أن أسألك ما ليس لي به علم وإلا تغفر لي وترحمني أكن من الخاسرين"
                  <br></br>
                  [هود - 47].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "رب اجعلني مقيم الصلاة ومن ذريتي ربنا وتقبل دعاء".
                  <br></br>
                  [إبرهيم - 40].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا اغفر لي ولوالدي وللمؤمنين يوم يقوم الحساب"
                  <br></br>
                  [إبرهيم - 41].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "رب أدخلني مدخل صدق وأخرجني مخرج صدق واجعل لي من لدنك سلطانا نصيرا"
                  <br></br>
                  [الإسراء - 80].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا آتنا من لدنك رحمة وهيئ لنا من أمرنا رشدا".
                  <br></br>
                  [الكهف - 10].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "رب اشرح لي صدري ويسر لي أمري واحلل عقدة من لساني يفقهوا قولي"
                  <br></br>
                  [طه - 25-28].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "وَقُلْ رَبِّ زِدْنِي عِلْمًا"
                  <br></br>
                  [طه - 114].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  "لا إله إلا أنت سبحانك إني كنت من الظالمين"
                  <br></br>
                  [الأنبياء - 87]
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "رب لا تذرني فردا وأنت خير الوارثين".
                  <br></br>
                  [الأنبياء - 89]
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  "رب أعوذ بك من همزات الشياطين وأعوذ بك رب أن يحضرون"
                  <br></br>
                  [المؤمنون - 97-98].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  "ربنا آمنا فاغفر لنا وارحمنا وأنت خير الراحمين"
                  <br></br>
                  [المؤمنون - 109]
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>

                  "رب اغفر وارحم وأنت خير الراحمين"
                  <br></br>
                  [المؤمنون - 118].
                  <br></br>
                  <br></br>
                  <hr></hr>
                  <br></br>
                </div>
              </>
            )}
          </div>
        )}
      </div>
      {activeSection === 'misbaha' && (

        <div className="bg-white bg-opacity-10  p-8 rounded shadow-lg text-center">

          <h1 className="text-2xl text-yellow-400  font-bold mb-4">مسبحة إلكترونية</h1>
          <div className="mb-4">
            <span className="text-6xl text-white font-semibold">{count}</span>
          </div>
          <div className="flex justify-center space-x-4">
            <button id="GO"
              onClick={handleClick}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              تسبيح
            </button>
            <button id="GN"
              onClick={handleReset}
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              إعادة تعيين
            </button>

          </div>
        </div>
      )}
    </div>
  );
};


export default App

