# Flash Fitness

## GitHub Pages 自動部署

這個專案已經設定好 GitHub Actions，自動部署到 `gh-pages` 分支。

### 1. 部署觸發分支

目前 GitHub Action 會在 `main` 分支有 push 時自動執行。

### 2. Vite 設定

已在 `vite.config.js` 中加入：

```js
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss()
  ],
  server: {
    host: true,
    port: 5173
  }
})
```

這樣可確保相對路徑資源在 GitHub Pages 上不會因為子路徑而壞掉。

### 3. 圖片與靜態資源位置

圖片已移動到 `public/images`，因此程式中使用 `/images/...` 的路徑就能正確引用靜態資源。

### 4. GitHub 設定頁面啟用 GitHub Pages

1. 進入 GitHub 專案頁面。
2. 點選 `Settings`。
3. 左側選單找到 `Pages`。
4. 在 `Build and deployment` 中，選擇 `Branch: gh-pages`。
5. 點選 `Save` 或 `Save changes`。

> 如果 GitHub Pages 在 `gh-pages` 分支尚未建立，Action 會在第一次部署時自動產生。

### 5. 手動測試部署

1. 安裝相依套件：

```bash
npm install
```

2. 在本機執行生產環境建置：

```bash
npm run build
```

3. 確認 `dist/` 資料夾已建立，且內容包含 `index.html`、`assets`、`images` 等靜態資源。

4. 如果要本機預覽，執行：

```bash
npm run preview
```

4. 若本機一切正常，將變更 commit 並 push 到 `main`：

```bash
git add .
git commit -m "Setup GitHub Pages deploy workflow"
git push origin main
```

> GitHub Actions 會在 `main` 分支 push 後自動執行，部署結果會推送到 `gh-pages` 分支。

### 6. 設定 GitHub remote

如果本專案尚未設定遠端，請先新增 GitHub remote：

```bash
git remote add origin https://github.com/<your-user>/<your-repo>.git
```

若已經設定過遠端但要更新網址，可使用：

```bash
git remote set-url origin https://github.com/<your-user>/<your-repo>.git
```

檢查目前遠端：

```bash
git remote -v
```

### 7. 初次部署流程

1. 確認 `main` 分支為當前工作分支：

```bash
git branch --show-current
```

2. 將目前專案變更推送到 GitHub：

```bash
git push origin main
```

3. 等待 GitHub Actions 執行完畢，可以在 GitHub 上的 `Actions` 頁面查看建置與部署紀錄。

4. 若 Action 成功，`gh-pages` 分支會自動產生，且 GitHub Pages 應開始部署網站。

### 8. 驗證部署結果

- 在 GitHub 專案 `Actions` 中，確認 `Deploy to GitHub Pages` workflow 已成功執行。
- 到 `Settings` > `Pages` 中查看網站 URL，並開啟該連結確認頁面是否正常顯示。
- 若發現圖片或樣式錯誤，請檢查是否使用相對路徑 `./` 以及 `public/images` 的靜態資源是否存在。

### 9. 常見問題

- `gh-pages` 分支未自動建立：請先確認 `main` 已成功 push 並且 Actions 沒有報錯。
- Page 顯示空白或 404：請確認 `vite.config.js` 已設定 `base: './'`，並重新推送一次。
- 圖片載入失敗：請確認所有圖片都在 `public/images`，且引用路徑為 `/images/...`。

