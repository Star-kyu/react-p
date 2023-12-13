import {Link} from 'react-router-dom';

function Error() {
  return (
    <div>
      <div>잘못된 접근입니다.</div>
      <Link to={"/"}>
        <div>돌아가기</div>
      </Link>
    </div>
  );
}

export default Error;
