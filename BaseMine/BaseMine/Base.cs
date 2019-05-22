using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BaseMine
{
    public class Base
    {

    public int[,] internalCamp;
    public int x, y;


    Base(int x = 1, int y = 1)
          {

            if (x <= 0)
            {
              x = 1;
            }

            if (y <= 0)
            {
              y = 1;
            }

            x = (x <= 0) ? 1 : x;
            y = (y <= 0) ? 1 : y;

           
            buildGrid(0, 0, x, y);
          }

    private void buildGrid(int x, int y, int width, int height)
    {

      var internalCamp = new int[width, height];

      for (int row = x; row < width; row++)
      {

        for (int column = y; column < height; column++)
        {
          this.internalCamp[row, column] = 0;
        }
      }

    }

    public void _setX(int width)
    {

      if (width < 0)
      {
        width = 1;
      }

      buildGrid(0, 0, width, this.y);

      var x = width;
    }

    public int getX()
    {

      return x;

    }

    public void setY(int height)
    {

      if (height < 0)
      {
        height = 1;
      }

      buildGrid(0, 0, x, height);

      y = height;
    }

    public int getY()
    {

      return y;
    }


    public int[,] getCamp()
    {

      _solve();
      return this.internalCamp;
    }

    string display(int x, int y)
    {

      if (internalCamp[x, y] == 0)
      {
        return " ";
      }
      else if (internalCamp[x, y] == -1)
      {
        return "*";
      }

      return internalCamp[x, y].ToString();
    }

    void setBomb(int x, int y)
    {

      internalCamp[x, y] = -1;
    }


    void clearGrid(int x, int y)
    {

      internalCamp[x, y] = 0;
    }

    private bool _existsInCamp(int x, int y)
    {

      return internalCamp[x, y] != 0;

    }

    private void _increment(int x, int y)
    {

      if (_existsInCamp(x, y) && internalCamp[x, y] > -1)
      {
        internalCamp[x, y]++;
      }

    }

    private bool _isBomb(int x, int y)
    {
      return internalCamp[x, y] == -1;
    }

    private void _clear()
    {

      for (int r = 0; r < this.x; r++)
      {
        for (int c = 0; c < this.y; c++)
        {
          if (!_isBomb(r, c))
          {
            internalCamp[r, c] = 0;
          }
        }
      }
    }

    public void changeBomb(int x, int y)
    {

      if (_isBomb(x, y))
      {
        clearGrid(x, y);
      }
      else
      {
        setBomb(x, y);
      }

    }

    private void _solve()
    {

      this._clear();

      for (int r = 0; r < this.x; r++)
      {
        for (int c = 0; c < this.y; c++)
        {
          if (this._isBomb(r, c))
          {
            _increment(r - 1, c - 1);
            _increment(r - 1, c);
            _increment(r - 1, c + 1);

            _increment(r, c - 1);
            _increment(r, c + 1);

            _increment(r + 1, c - 1);
            _increment(r + 1, c);
            _increment(r + 1, c + 1);
          }
        }
      }
    }
  } 
}
