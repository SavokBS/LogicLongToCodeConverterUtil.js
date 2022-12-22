function ToId(hashtag) {

  let TagChar = ["0", "2", "8", "9", "P", "Y", "L", "Q", "G", "R", "J", "C", "U", "V"]
  hashtag = hashtag.replace("#", "")
  let TagArray = hashtag.toUpperCase().split('');
  let ID = 0
  for(let i=0; i<TagArray.length; i++) {
    let char = TagArray[i];
    let charIndex = TagChar.indexOf(char)
    ID *= TagChar.length
    ID += charIndex

  }
  let hlid = []
  hlid.push(ID % 256)
  hlid.push((ID - hlid[0]) / 256)
  return hlid


}
