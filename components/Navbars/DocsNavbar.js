import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()
  return (
    <ul className=" flex flex-col">
      <h4 className="text-sm text-gray-600 font-semibold mb-4">
        TERMS & CONDITIONS
      </h4>
      <div
        className={`text-gray-500 mb-1 hover:text-gray-900 ${
          router.asPath === '/terms' ? 'text-gray-900' : ''
        }`}
      >
        <Link href="/docs/terms" as="/terms">
          Terms of Service
        </Link>
      </div>
      <div
        className={`text-gray-500 mb-1 hover:text-gray-900 ${
          router.asPath === '/support' ? 'text-gray-900' : ''
        }`}
      >
        <Link href="/docs/support" as="/support-terms">
          Support
        </Link>
      </div>
      <div
        className={`text-gray-500 mb-1 hover:text-gray-900 ${
          router.asPath === '/policy' ? 'text-gray-900' : ''
        }`}
      >
        <Link href="/docs/policy" as="/policy">
          Privacy Policy
        </Link>
      </div>

      <div
        className={`text-gray-500 mb-1 hover:text-gray-900 ${
          router.asPath === '/licenses' ? 'text-gray-900' : ''
        }`}
      >
        <Link href="/docs/licenses" as="/licenses">
          Licenses
        </Link>
      </div>
    </ul>
  )
}
