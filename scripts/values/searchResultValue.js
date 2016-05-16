angular.module('app')
.value('searchResultValue', [
  {
    title: 'Dj wale babu',
    author: 'Satyajit Roy12345678912345678',
    playing: 0,
    url: 'http://2015.downloadming1.com/indian%20pop/Dj%20Waley%20Babu%20(ft.%20Aastha%20Gill)%20-%20Badshah%20(2015)/01%20-%20Dj%20Waley%20Babu%20(ft.%20Aastha%20Gill)%20-%20Badshah%20-%20DownloadMing.SE.mp3',
    img: 'http://2.bp.blogspot.com/-bSjd_VSbCIA/VanGU4iJS-I/AAAAAAAAABI/ef42xwCTPBQ/s400/Dj%2BWaley%2BBabu%2B%2528ft.%2BAastha%2BGill%2529.jpg'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://dload1.kingboss.in/siteuploads/files/sfd47/23492/Main%20Tera%20Boyfriend%20Tu%20Meri%20Girlfriend%20(J%20Star)%20320%20Kbps-(KingBoss.In).mp3',
    img: 'data:image/png;base64,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'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  },
  {
    title: 'Apur Panchali',
    author: 'Satyajit Roy',
    playing: 0,
    url: 'http://media.downloadming.se/Jai%20Gangaajal%20(2016)/01%20-%20Maya%20Thagni%20-%20DownloadMing.SE.mp3',
    img: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRc1qxkr5707COKLNQUEkh1zh-V1Ffc65y-ZJBTAp5_7tXF_ZuSMA'
  }
]);

