//hook
//useEffect 렌더링 결과가 돔에 그려지고 난 이후 실행
//useRef    dom에 직접 접근하여 포커스를 주거나 스크롤 이벤트를 실행
//useNavigate 처리가 끝난 후 링크를 이동시켜주는 훅
import './root.css'
import Item from '../item/item.js'

function Root() {
  return (<Item/>);
}

export default Root;
