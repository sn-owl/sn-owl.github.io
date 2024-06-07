import React, { useState, useCallback } from 'react'; // React 라이브러리를 임포트합니다. React는 UI를 구성하는 컴포넌트를 만드는 데 사용됩니다.
import { MdAdd } from 'react-icons/md'; // 'react-icons' 라이브러리에서 MdAdd 아이콘을 임포트합니다. 이 아이콘은 '+' 모양의 추가 버튼을 나타냅니다.
import './TodoInsert.scss'; // 'TodoInsert.scss' 파일을 임포트하여 이 컴포넌트의 스타일을 적용합니다. SCSS는 CSS의 확장 언어로, 더 강력한 스타일링 기능을 제공합니다.
 
// TodoInsert 컴포넌트를 선언합니다. 이 컴포넌트는 사용자가 할 일을 입력하고 추가할 수 있는 폼을 렌더링합니다.
const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);
 
  const onSubmit = useCallback(
    e => {
      onInsert(value);
      setValue(''); // value 값 초기화
 
      // submit 이벤트는 브라우저에서 새로고침을 발생시킵니다.
      // 이를 방지하기 위해 이 함수를 호출합니다.
      e.preventDefault();
    },
    [onInsert, value],
  );
  return (
    <form className="TodoInsert"onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};
 
// TodoInsert 컴포넌트를 다른 파일에서 사용할 수 있도록 내보냅니다. 이렇게 하면 다른 컴포넌트에서 이 컴포넌트를 import하여 사용할 수 있습니다.
export default TodoInsert;


//https://react-icons.netlify.com/#/icons/md 페이지에 들어가면 다음과 같이 수많은 아이콘과 이름이 함께 나타나는데요.
//여기서 사용하고 싶은 아이콘을 고른 다음, import 구문을 사용하여 불러온 후 컴포넌트처럼 사용하면 됩니다.
//import { 아이콘 이름 } from 'react-icons/md';
