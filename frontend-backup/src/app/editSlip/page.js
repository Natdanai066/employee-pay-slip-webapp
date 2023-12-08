"use client"
import { useRouter } from 'next/navigation'

export default function Page() {
  const router = useRouter()
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="shadow-lg p-8 w-1/2">
          <div className="flex justify-end">
            <button type="button" className="bg-sky-300 px-4 py-2 rounded-md" onClick={() => router.push('/')}>
              ข้อมูลพนักงานทั้งหมด
            </button>
          </div>
          <h1 className="text-center">แบบฟอร์มกรอกข้อมูลพนักงาน</h1>
        </div>
    </div>
  );
}