export function SearchBox({ value, onChange }) {
  return (
    <input
      type="search"
      placeholder="주소를 입력하세요"
      value={value}
      onChange={onChange}
    />
  );
}