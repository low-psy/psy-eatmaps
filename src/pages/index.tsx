import Link from 'next/link';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  return (
    <div>
      <h1>Map Index Page</h1>
      <ul>
        <li>
          <Link href='/stores'>맛집 목록</Link>
        </li>
        <li>
          <Link href='/stores/new'>맛집 생성</Link>
        </li>
        <li>
          <Link href='/stores/1'>맛집 상세 페이지</Link>
        </li>
        <li>
          <Link href='/stores/1/edit'>맛집 수정 페이지</Link>
        </li>
        <li>
          <Link href='/users/login'>로그인 페이지</Link>
        </li>
        <li>
          <Link href='/users/logout'>로그아웃 페이지</Link>
        </li>
        <li>
          <Link href='/users/myPage'>마이페이지</Link>
        </li>
      </ul>
    </div>
  );
}
