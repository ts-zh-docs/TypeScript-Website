type Props = {
  pageContext: any
}

export const localeLink = (props: Props, localeString: string) => {
  if (props.pageContext.lang === "en") {
    return localeString
  } else {
    return `/${props.pageContext.lang}${localeString}`
  }
}
