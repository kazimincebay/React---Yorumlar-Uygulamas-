import React from 'react';
import Comment from './Comment'
import Card from './Card';

const App =()=>{
  return(
    <div className="ui comments" style={{
      paddingTop:'10px',
      paddingLeft:'15px'
    }}>
<Card>
  <Comment isim="Kazım İNCEBAY" day="3" rate="5" yorum="Bu Bir Yorumdur" />
  </Card>
  <Card>
  <Comment isim="Kazım İNCEBAY" day="6" rate="3" yorum="Bu İkinci Bir Yorumdur" />
  </Card>
</div>
  )
}

export default App;