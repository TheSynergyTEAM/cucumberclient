export {}

declare global {
  // null과 undefined를 가질 수 있는 타입 정의
  type Nullable<T> = T | null | undefined
}
