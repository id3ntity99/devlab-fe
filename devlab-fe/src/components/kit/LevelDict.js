export function translate(level) {
  switch (level) {
    case "BEGINNER":
      return "초급";
    case "INTERMEDIATE":
      return "중급";
    case "ADVANCED":
      return "고급";
  }
}

export function translateLanguage(lang) {
  switch (lang) {
    case "KOR":
      return "한국어";
    case "ENG":
      return "영어";
  }
}
