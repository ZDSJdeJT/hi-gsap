import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ErrorAlert } from '@/components/error-alert';

export default function NotFound() {
  return (
    <>
      <ErrorAlert title="出错了😅" description="未找到页面。">
        <Button asChild>
          <Link href="/">回到首页</Link>
        </Button>
      </ErrorAlert>
    </>
  );
}
