import { useState } from 'react'
import Icon from './Icon'

export default function WeChatButton({
  wechatId,
  className,
  children,
}) {
  const [copied, setCopied] = useState(false)

  function copyId() {
    navigator.clipboard?.writeText(wechatId).catch(() => {})
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <div className="group relative">
      <button className={`cursor-target ${className}`} data-cursor-label="微信" type="button" onClick={copyId}>
        {copied ? (
          <>
            <Icon className="text-xl text-secondary" name="check" />
            <span>已复制微信号</span>
          </>
        ) : (
          children
        )}
      </button>
      <div className="pointer-events-none absolute bottom-full left-0 z-30 mb-3 hidden min-w-[180px] flex-col items-center rounded-2xl bg-surface-container-lowest p-4 shadow-xl group-hover:flex">
        <span className="font-label-caps text-label-caps tracking-widest text-secondary uppercase">
          WeChat ID
        </span>
        <span className="mt-1 font-headline-sm text-sm font-semibold text-primary">{wechatId}</span>
        <span className="mt-1 text-center font-body-sm text-xs text-on-surface-variant">
          点击复制微信号
        </span>
      </div>
    </div>
  )
}
