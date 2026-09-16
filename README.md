# 搬家通 Moving Match｜形象官網 V1.2

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
V1.2 的聯絡 CTA 暫用 `service@moving-match.com` 作為版面預留，正式上線前請確認實際客服信箱。先驗收 Render 預覽網址，再綁定 `moving-match.com`，避免影響既有服務。


## V1.2 更新
- 使用正式 Moving Match 公司 Logo，並同步更新 favicon。
- 物流系統入口文字調整為「圖書物流系統」。
- 保留預留聯絡信箱，新增聯絡電話 02-27648088。


## V1.2 更新
- 首頁主視覺更換為「現場執行 × 配送流程 × 數位管理」整合圖。
- 聯絡區新增搬遷需求表，可切換「個人搬遷／企業搬遷」。
- 表單送出會開啟使用者 Email 並自動帶入需求內容，不新增後端資料儲存。
- 移除聯絡區「既有客戶：圖書物流系統登入」文字連結；網站其他圖書物流系統入口維持。
- 聯絡電話 02-27648088 保留；客服 Email 仍為版面預留。
