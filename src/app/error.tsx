'use client';

import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ErrorAlert } from '@/components/error-alert';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <ErrorAlert title="出错了😭" description={error.message}>
      <div className="flex gap-x-2">
        <Button onClick={() => reset()}>重试</Button>
        <Button asChild>
          <Link href="/">回到首页</Link>
        </Button>
      </div>
    </ErrorAlert>
  );
}
