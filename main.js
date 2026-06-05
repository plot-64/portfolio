// ============================
//     タブ切り替え
// ==============================
// ボタンの要素を取得
const worksItems = document.querySelectorAll('.works-item');

const buttonAll = document.getElementById('js-button-all');
const buttonCODE = document.getElementById('js-button-code');
const buttonMEDIA = document.getElementById('js-button-media');


buttonAll.addEventListener('click', () => {
  worksItems.forEach((item) => {
    item.style.display = '';
  });
  buttonAll.classList.add('is-active');
  buttonCODE.classList.remove('is-active');
  buttonMEDIA.classList.remove('is-active'); /*たのひー*/
});

buttonCODE.addEventListener('click', () => {
  worksItems.forEach((item) => {
        if (item.classList.contains('js-code')) {
          item.style.display = ''; // デフォルトに
        } else {
          item.style.display = 'none'; // 非表示
        }
  });
  buttonAll.classList.remove('is-active');
  buttonCODE.classList.add('is-active');
  buttonMEDIA.classList.remove('is-active');
});

buttonMEDIA.addEventListener('click', () => {
  worksItems.forEach((item) => {
        if (item.classList.contains('js-media')) {
          item.style.display = ''; 
        } else {
          item.style.display = 'none'; 
        }
  });
  buttonAll.classList.remove('is-active');
  buttonCODE.classList.remove('is-active');
  buttonMEDIA.classList.add('is-active');
});







// ポップアップ
// ポップアップの要素を取得
const modal = document.getElementById('js-modal');
const modalClose = document.getElementById('js-modal-close');
const modalContent = document.getElementById('js-modal-content');


worksItems.forEach((item) => {
  item.addEventListener('click', () => {
    const modalbox = item.querySelector('.modal-box');
    
    if (modalbox) {
      // 必要なパーツをカード内から個別に取得
      const titleHtml = item.querySelector('.works-title').outerHTML;
      const imgHtml = item.querySelector('img').outerHTML;
      const linksHtml = item.querySelector('.links').outerHTML;
      const infoHtml = item.querySelector('.modal-info').innerHTML;
      const techlist = item.querySelector('.tech-list').outerHTML;

      // タイトルとリンクボタンを包むヘッダー枠を組み立て
      const headerHtml = `<div class="modal-header">${titleHtml}${linksHtml}</div>`;

      // 順番通り（ヘッダー → 画像 → 詳細文）に結合して流し込む
      modalContent.innerHTML = headerHtml + imgHtml + `<div class="modal-info">${infoHtml}</div>` + techlist;
      
      // ポップアップを表示
      document.body.classList.add('no-scroll'); // スクロールきんしにする
      // リンクポップアップ化
      const modalLinks = modalContent.querySelectorAll('a');
      modalLinks.forEach((link) => {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
      });
      modal.showModal();
    }
  });
});


// ---------------------------------
//        閉じる処理たち
// ---------------------------------

// 閉じるボタンが押されたらポップアップを閉じる
modalClose.addEventListener('click', () => {
  document.body.classList.remove('no-scroll'); // スクロールOK
  modal.close();
});
// 背景（ダイアログの外側）が押されたら閉じる
modal.addEventListener('click', (event) => {
  if (event.target === modal) {
    document.body.classList.remove('no-scroll'); // こっちにもいるやん
    modal.close();
  }
});