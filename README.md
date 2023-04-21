
# Anywhere Tulu

Conert your blogs, contents in your website from Kannada or Malyalam or Hindi script to Tulu Script with just 2 steps.


## Introduction 
Anywhere Tulu is a transliteration tool for web developers to transliterate Kannada text written in Tulu language to Tulu Script. Anywhere Tulu uses the same code from Genairi tulu transliterator to transliterate the text. It was made using Javascript only. 
#### You can see the simple working example <a href="https://jtuluve.github.io/genasiri-anywhere/script.js">here</a>
Currently it supports Kannada only. I will be adding Malayalam and Hindi ASAP. 

## Quick Installation
### Step 1:
Paste this one line of code before the closing tag of body (i.e before ```</body>``` )

```html
<script src="https://jtuluve.github.io/genasiri-anywhere/script.js">
```
### Step 2:
Add "genatulu" class to the tags which has the contents you want to convert to Tulu Script. 
Ex: 
```html
<h1 class="genatulu">ತುಳುನಾಡ್</h1>
<p class="genatulu">ತುಳುನಾಡ್ ಕರ್ನಾಟಕ ರಾಜ್ಯೊದ ದಕ್ಷಿಣ ಕನ್ನಡ, ಉಡುಪಿ ಜಿಲ್ಲೆಲು ಕೇರಳ ರಾಜ್ಯೊದ ಕಾಸರಗೋಡುಜಿಲ್ಲೆನ್ ತುಳುನಾಡ್ ಪಂಡ್‍ದ್ ಪನ್ಪೆರ್. ಈ ಪ್ರದೇಸೊದ ಮುಕ್ಯೊ ಬಾಸೆ ತುಳು. ಬೌಗೋಲಿಕವಾದ್ ತುಳುನಾಡ್ ಭಾರತದೇಸೊದ ನೈರುತ್ಯೊಡುಪ್ಪುನ ಪ್ರದೇಸೊ</p>
<p class="genatulu">ತುಳುನಾಡ್ದ ಪಡ್ಡಾಯಿಡ್ ಅರಬ್ಬಿ ಕಡಲ್. ಬಡೆಕಾಯಿಡ್ ಕರ್ನಾಟಕ ರಾಜ್ಯೊದ ಉತ್ತರ ಕನ್ನಡ ಜಿಲ್ಲೆ ಮೂಡಾಯಿಡ್ ಹಾಸನ ಜಿಲ್ಲೆ, ತೆನ್ಕಾಯಿಡ್ ಕೇರಳ. ತುಳು ಮುಲ್ತ ಮಣ್ಣ್‌ದ ಬಾಸೆ. ಕನ್ನಡ, ಬ್ಯಾರಿ,ಕೊಂಕಣಿ ಬಾಸೆನ್‍ಲಾ ಮುಲ್ಪ ಪಾತೆರುವೆರ್. ತುಳುನಾಡ್ದ ವ್ಯಾಪ್ತಿ ೮,೪೪೧ km2 (೩,೨೫೯ sq mi). ೨೦೦೧ಗ್ ಮುಲ್ಪ ೩,೦೦೫,೮೯೭ ನಸ್ಯೊ ಇತ್ತ್ಂಡ್. ಕುಡ್ಲದ ಮಂಗಳೂರು ಮಹಾನಗರ ಪಾಲಿಕೆ, ಉಡುಪಿ ಮುಲ್ತ ಮುಕ್ಯೊ ನಗರ ಆದುಂಡು.</p>
```

#### And that's it!! You are good to go..


## Advanced control
You can control where the option of transliteration should stay by adjusting the style. The element visible in the top-right corner has the class name as "AT_mainbody". You can change the style to your wish.
example:
```css
.AT_mainbody{
top: 15px;
right: 15px;
}
```


## FAQ

#### It isn't converting the text to Tulu Script in my website. Why?
If it isn't converting the text,
• Please check If you have pasted the correct code in your html file.</br>
• Make sure that you have pasted the code just before the closing tag of body (i.e ```</body>```)</br>
• Make sure you have added 'genatulu' class in every tag you want to convert the text.</br>
• If everything is correct but if it still doen't work, please contact me.</br>


#### It is converting my text from english to tulu. Why?
Sorry. The allige font which I am using in this tool uses english letters to convert it to tulu. So it gets applied to any english texts. Here is a solution:
• Store the english text inside a span element and apply separate font to it.
##### example:
```
<h1 class="genatulu"> ತುಳುನಾಡ್ದ ವ್ಯಾಪ್ತಿ ೮,೪೪೧ <span style="font-family: 'Courier New', Courier, monospace;">km</span> ಸ್ಕ್ವೇರ್ (೩,೨೫೯ ಸ್ಕ್ವೇರ್ ಮೈಲ್ಸ್ ).</h1>
```
In the above example the "km" is in english. So we stored it around a span ag and applied separate font to it. It is important to add any font family or else it will not work.

## Got suggestions?
### If you have any suggestions/ queries contact me. I'm on <a href="https://instagram.com/jtuluve">instagram</a>. Let's chat!!
# Do you have time for coffee?
<a href="https://www.buymeacoffee.com/jtuluve" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
