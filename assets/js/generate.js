class Generator {
  constructor(className, fileName, pathNamePrifix, author) {
    this._pathNamePrifix = pathNamePrifix;
    this._className = className;
    this._fileName = fileName;
    this._author = author;
  }

  generatorClass() {
    alert(this._pathNamePrifix);
  }
}