export const handleCountText = (count: number) =>{
  if(count === 1) return 'مرة واحدة'
  else if(count === 2) return 'مرتين'
  else if(count > 2 && count < 11) return String(count) + ' مرات'
  else return 'مرة'
}