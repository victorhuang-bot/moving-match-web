# 搬家通 Moving Match｜形象官網 V1.2.1

Render-ready 官方形象網站，與既有 `lib.moving-match.com` 圖書物流系統分開部署。

## Render 設定
- Region: Singapore
- Runtime: Node
- Build Command: `npm install`
- Start Command: `npm start`
- Health Check: `/health`
- Branch: `main`

## 本機測試
`npm install` → `npm run check` → `npm start`

## 上線前確認
V1.2.1 的聯絡 CTA 暫用 `service@moving-match.com` 作為版面預留，正式上線前請確認實際客服信箱。先驗收 Render 預覽網址，再綁定 `moving-match.com`，避免影響既有服務。


## V1.2.1 更新
- 使用正式 Moving Match 公司 Logo，並同步更新 favicon。
- 物流系統入口文字調整為「圖書物流系統」。
- 保留預留聯絡信箱，新增聯絡電話 02-27648088。


## V1.2.1 更新
- 首頁主視覺更換為「現場執行 × 配送流程 × 數位管理」整合圖。
- 聯絡區新增搬遷需求表，可切換「個人搬遷／企業搬遷」。
- 表單送出會開啟使用者 Email 並自動帶入需求內容，不新增後端資料儲存。
- 移除聯絡區「既有客戶：圖書物流系統登入」文字連結；網站其他圖書物流系統入口維持。
- 聯絡電話 02-27648088 保留；客服 Email 仍為版面預留。


## V1.2.1 修正
- 首頁主圖維持原始 3:2 比例完整顯示，不裁切、不拉伸。
- 搬遷需求區旁保留聯絡電話 02-2764-7088。
- 搬遷需求區旁顯示聯絡信箱 service@moving-match.com。


## V1.2.2
- 首頁主圖改為獨立 `hero-media`，移除舊 `.visual` 固定高度與裁切規則。
- 主圖完整等比例顯示，並加 `?v=122` 避免瀏覽器沿用舊圖片快取。
- 聯絡區恢復簡潔雙欄設計。
- 搬遷需求表改為按鈕點擊後以 Modal 彈出。
- 保留聯絡電話 02-2764-7088 與 service@moving-match.com。


## V1.2.3
- 首頁主圖限制最大寬度與高度，避免圖片過大並避免擠壓左側標題。
- 聯絡電話與 service@moving-match.com 移到「填寫搬遷需求」按鈕正上方。
- 需求表維持 Modal：按按鈕才彈出，不直接顯示在頁面。
- 表單送出後關閉 Modal、清空欄位，並開啟預填 Email。


## V1.2.4
- 修正瀏覽器/Render 靜態資源快取：CSS、JS、首頁主圖全部加版本參數 v=124。
- 首頁主圖固定在右欄最大 560px、最大高度 420px，不再把左側標題擠成直排。
- Modal 關鍵樣式直接放入 HTML head，避免舊 CSS 快取造成表單攤平在頁面底部。
- 聯絡電話與 service@moving-match.com 保留在「填寫搬遷需求」按鈕上方。
- 搬遷需求表只有點按鈕才彈出；送出後關閉。


## V1.3
- 新增深綠色企業 Footer。
- 新增搬家通品牌簡介。
- 公司資訊：搬家通股份有限公司 / Moving-Match。
- 電話：02-2764-7088。
- Email：info@moving-match.com。
- 辦公時間：09:00–20:00。
- 統一編號：85017306。
- 電話與 Email 支援直接點擊。
- 保留圖書物流系統登入連結。
- 延續 V1.2.4 首頁、需求 Modal 與快取修正。
