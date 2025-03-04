var tipuesearch = {"pages": [{'title': 'About', 'text': '課程名稱: 協同產品設計實習 - Collaborative Product Design Practice \n 2b 第10組網站:  https://mdecd2025.github.io/2b-g10/content/index.html \n 2b 第10組倉儲:  https://github.com/mdecd2025/2b-g10 \n \n 課程代號: cd2025 \n Teams 線上教學: \n 以 "學號@nfu.edu.tw" 登入 \xa0 https://login.microsoftonline.com/ \xa0 Office 365 \n Teams 團隊代碼:\xa0 p5z4eku \n \n 課程評分: \n Homework (30%) - 每週至少提交兩次與課程進度有關的內容, 完成後填回自評表單 \n Exam (40%) - 建立包含操作流程影片、心得以及提供檔案下載的網頁後填回自評表單 \n Final Report (30%) - 利用網頁內容進行簡報並提交 pdf 格式書面報告, 完成後填回自評表單 \n', 'tags': '', 'url': 'About.html'}, {'title': 'list', 'text': 'from browser import html, document\n\n# 定義 URL，指向學員資料的網頁\nurl = "https://mde.tw/list/2b.txt"\n\n# 使用 open() 方法從 URL 讀取數據並轉換為數列\ndata = open(url).readlines()\n\n# 濾除標題資料，從第二行開始取數\nall_stud = data[1:]\n\n# 利用 document[] 取得 id 為 "brython_div1" 的位置\nbrython_div1 = document["brython_div1"]\n\n# 顯示學員總數\nbrython_div1 <= "總共有 " + str(len(all_stud)) + " 名學員"\nbrython_div1 <= html.BR()\n\n# 使用迴圈遍歷每個學員的資料\nfor i, student in enumerate(all_stud):\n    # 假設每行資料的格式是 "學號\\tGitHub倉儲名稱"\n    student_data = student.strip().split(\'\\t\')\n\n    if len(student_data) == 2:  # 確保資料格式正確\n        student_id = student_data[0]\n        github_name = student_data[1]\n\n        # 構造 URL\n        personal_site = f"https://mdecd2025.github.io/hw-{github_name}/content/index.html"\n        github_repo = f"https://github.com/mdecd2025/hw-{github_name}"\n\n        # 創建超連結，顯示為 "個人網站" 和 "倉儲"\n        personal_link = html.A("個人網站", href=personal_site, target="_blank")  # "個人網站" 的超連結\n        github_link = html.A("倉儲", href=github_repo, target="_blank")  # "倉儲" 的超連結\n\n        # 顯示學員資料，依照要求的格式，並將 URL 顯示為超連結\n        brython_div1 <= f\'"{student_id}" \'\n        brython_div1 <= personal_link  # 插入 "個人網站" 超連結\n        brython_div1 <= " "  # 空格\n        brython_div1 <= github_link  # 插入 "倉儲" 超連結\n        brython_div1 <= html.BR()\n    else:\n        # 當資料格式不正確時，顯示錯誤訊息\n        brython_div1 <= f"資料錯誤: {student}"\n        brython_div1 <= html.BR()\n \n 總共有 66 名學員 "40923137"\xa0 個人網站 \xa0 倉儲 "41023114"\xa0 個人網站 \xa0 倉儲 "41023205"\xa0 個人網站 \xa0 倉儲 "41023206"\xa0 個人網站 \xa0 倉儲 "41023210"\xa0 個人網站 \xa0 倉儲 "41023213"\xa0 個人網站 \xa0 倉儲 "41023215"\xa0 個人網站 \xa0 倉儲 "41023216"\xa0 個人網站 \xa0 倉儲 "41023218"\xa0 個人網站 \xa0 倉儲 "41023232"\xa0 個人網站 \xa0 倉儲 資料錯誤: 41023237 "41071202"\xa0 個人網站 \xa0 倉儲 "41071203"\xa0 個人網站 \xa0 倉儲 "41071204"\xa0 個人網站 \xa0 倉儲 "41223201"\xa0 個人網站 \xa0 倉儲 "41223202"\xa0 個人網站 \xa0 倉儲 "41223203"\xa0 個人網站 \xa0 倉儲 "41223205"\xa0 個人網站 \xa0 倉儲 "41223206"\xa0 個人網站 \xa0 倉儲 "41223207"\xa0 個人網站 \xa0 倉儲 "41223208"\xa0 個人網站 \xa0 倉儲 "41223209"\xa0 個人網站 \xa0 倉儲 資料錯誤: 41223210 "41223211"\xa0 個人網站 \xa0 倉儲 "41223212"\xa0 個人網站 \xa0 倉儲 資料錯誤: 41223214 "41223215"\xa0 個人網站 \xa0 倉儲 "41223216"\xa0 個人網站 \xa0 倉儲 "41223217"\xa0 個人網站 \xa0 倉儲 "41223218"\xa0 個人網站 \xa0 倉儲 "41223219"\xa0 個人網站 \xa0 倉儲 "41223220"\xa0 個人網站 \xa0 倉儲 "41223221"\xa0 個人網站 \xa0 倉儲 "41223222"\xa0 個人網站 \xa0 倉儲 "41223223"\xa0 個人網站 \xa0 倉儲 "41223224"\xa0 個人網站 \xa0 倉儲 "41223225"\xa0 個人網站 \xa0 倉儲 "41223226"\xa0 個人網站 \xa0 倉儲 "41223227"\xa0 個人網站 \xa0 倉儲 "41223228"\xa0 個人網站 \xa0 倉儲 "41223229"\xa0 個人網站 \xa0 倉儲 "41223230"\xa0 個人網站 \xa0 倉儲 "41223231"\xa0 個人網站 \xa0 倉儲 "41223232"\xa0 個人網站 \xa0 倉儲 "41223233"\xa0 個人網站 \xa0 倉儲 "41223234"\xa0 個人網站 \xa0 倉儲 "41223235"\xa0 個人網站 \xa0 倉儲 "41223236"\xa0 個人網站 \xa0 倉儲 "41223237"\xa0 個人網站 \xa0 倉儲 "41223239"\xa0 個人網站 \xa0 倉儲 "41223240"\xa0 個人網站 \xa0 倉儲 "41223242"\xa0 個人網站 \xa0 倉儲 "41223243"\xa0 個人網站 \xa0 倉儲 "41223244"\xa0 個人網站 \xa0 倉儲 "41223245"\xa0 個人網站 \xa0 倉儲 "41223246"\xa0 個人網站 \xa0 倉儲 "41223247"\xa0 個人網站 \xa0 倉儲 "41223248"\xa0 個人網站 \xa0 倉儲 "41223249"\xa0 個人網站 \xa0 倉儲 "41223250"\xa0 個人網站 \xa0 倉儲 "41223251"\xa0 個人網站 \xa0 倉儲 "41223252"\xa0 個人網站 \xa0 倉儲 資料錯誤: 41223253 資料錯誤: 41271217 "41271236"\xa0 個人網站 \xa0 倉儲 "41271237"\xa0 個人網站 \xa0 倉儲 \n \n \n \n', 'tags': '', 'url': 'list.html'}, {'title': 'Final', 'text': '期末協同專案執行過程影片、簡報與 PDf 報告檔案 (六人一組) (30%) \n 題目:  Webots 動態投籃模擬系統的協同設計 \n 說明:  \n 籃框架被配置在一定範圍內, 可隨機慢速前進、後退及左右擺動, 投籃機構系統帶有一定數量的籃球, 被配置在可自由移動的輪車上. \n 操作者可利用鍵盤特定按鍵控制投籃輪車的移動並發射投籃, 每投出一球後系統透過記分板進行計分, 並由送球機構進行補球或移動輪車取球, 遊戲可進行至全部數量籃球投完為止. \n 請將期末協同專案執行過程、內容與心得, 製作成影片，配合字幕上傳至 Youtube 後嵌入各階段的期末報告頁面中. \n 影片標題:  國立虎尾科技大學 - 機械設計工程系 - cd2025 期末報告 - 學員學號 - 各階段影片主題 \n', 'tags': '', 'url': 'Final.html'}, {'title': 'Brython', 'text': '1 add to 100 \n  導入 brython 程式庫  \n \n \n \n \n  啟動 Brython  \n \n \n \n  導入 FileSaver 與 filereader  \n \n \n \n \n  導入 ace  \n \n \n \n \n \n \n  導入 gearUtils-0.9.js Cango 齒輪繪圖程式庫  \n \n \n \n \n \n \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src1"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n \n \n \n  add 1 to 100 開始  \n \n \n  add 1 to 100 結束 \n  editor1 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor1 結束   ##########################################  \n 從 1 累加到 100 part2: \n 1 add to 100 cango_three_gears BSnake AI Tetris \n  請注意, 這裡使用 Javascript 將 localStorage["kw_py_src2"] 中存在近端瀏覽器的程式碼, 由使用者決定存檔名稱 \n \n \n \n  add 1 to 100 part2 開始  \n \n \n  add 1 to 100 part2 結束 \n  editor2 開始  \n  用來顯示程式碼的 editor 區域  \n \n  以下的表單與按鈕與前面的 Javascript doSave 函式以及 FileSaver.min.js 互相配合  \n  存擋表單開始  \n Filename:  .py   \n  存擋表單結束  \n \n  執行與清除按鈕開始  \n Run   Output   清除輸出區 清除繪圖區 Reload \n  執行與清除按鈕結束  \n \n  程式執行 ouput 區  \n \n  Brython 程式執行的結果, 都以 brython_div1 作為切入位置  \n \n  editor2 結束  \n \n \n', 'tags': '', 'url': 'Brython.html'}]};