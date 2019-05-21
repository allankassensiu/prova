export class BaseMine {
  private arrybomb: number[][];

  constructor(x: number = 1, y: number = 1) {
    this.arrybomb = [];
    if (!(x)) {
      x = 1;
    }
    if (!(y)) {
      y = 1;
    }

    this.buildGrid(0, 0, x, y);
  }

  private buildGrid(x: number, y: number, width: number, height: number): void {
    for (let r = x; r < width; r++) {
      const row = [];
      for (let c = y; c < height; c++) {
        row.push(0);
      }
      this.arrybomb.push(row);
    }
  }



  set x(width: number) {
    if (width === this.x) {
      return;
    }

    if (width > this.x) {
      this.buildGrid(this.x, 0, width, this.y);
    } else if (width > 0) {
      do {
        this.arrybomb.pop();
      } while (this.x > width);
    }
  }

  get x(): number {
    return this.arrybomb.length;
  }

  set y(height: number) {
    if (height === this.y) {
      return;
    }

    if (height > this.y) {
      const oldHeight = this.y;
      this.arrybomb.forEach(row => {
        for (let c = oldHeight; c < height; c++) {
          row.push(0);
        }
      });
    } else if (height > 0) {
      do {
        this.arrybomb.forEach(row => {
          row.pop();
        });
      } while (this.y > height);
    }
  }

  get y(): number {
    return this.arrybomb[0].length;
  }

  get camp(): number[][] {
    this._solve();
    return this.arrybomb;
  }

  display(x: number, y: number): string {
    if (this.arrybomb[x][y] === 0) {
      return ' ';
    } else if (this.arrybomb[x][y] === -1) {
      return '*';
    }
    return this.arrybomb[x][y].toString();
  }

  changeBomb(x: number, y: number): void {
    var z = Math.round(Math.random() - x);
    var y = Math.round(Math.random() - y);
    //alert(z);
    if (z < 1) {
      this.setBomb(x, y);
     // this.clearGrid(x, y);
    } else {
      this.clearGrid(x, y);
    }

//    if (this._isBomb(x, y)) {
  //    this.clearGrid(x, y);
    //} else {
      //this.setBomb(x, y);
   // }

  }

  setBomb(x: number, y: number): void {
    this.arrybomb[x][y] = -1;
  }

  clearGrid(x: number, y: number): void {
    this.arrybomb[x][y] = 0;
  }

  private _existsInCamp(x: number, y: number) {
    return this.arrybomb[x] !== undefined && this.arrybomb[x][y] !== undefined;
  }

  private _increment(x: number, y: number) {
    if (this._existsInCamp(x, y) && this.arrybomb[x][y] > -1) {
      this.arrybomb[x][y]++;
    }
  }

  private _isBomb(x: number, y: number) {
    return this.arrybomb[x][y] === -1;
  }

  private _clear(): void {
    for (let r = 0; r < this.arrybomb.length; r++) {
      for (let c = 0; c < this.arrybomb[r].length; c++) {
        if (!this._isBomb(r, c)) {
          this.arrybomb[r][c] = 0;
        }
      }
    }
  }

  private _solve(): void {
    this._clear();
    for (let r = 0; r < this.arrybomb.length; r++) {
      for (let c = 0; c < this.arrybomb[r].length; c++) {
        if (this._isBomb(r, c)) {
          this._increment(r - 1, c - 1);
          this._increment(r - 1, c);
          this._increment(r - 1, c + 1);

          this._increment(r, c - 1);
          this._increment(r, c + 1);

          this._increment(r + 1, c - 1);
          this._increment(r + 1, c);
          this._increment(r + 1, c + 1);
        }
      }
    }
  }
}
