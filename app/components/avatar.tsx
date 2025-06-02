export function Avatar({ src }: { src: string }) {
	return (
		<div className="min-w-62 h-90 shadow-lg rounded-tl-[16rem] rounded-tr-[99rem] rounded-b-[99rem] overflow-hidden flex items-end justify-center bg-brand-primary">
			<img src={src} alt="" className="w-auto h-80" />
		</div>
	)
}
