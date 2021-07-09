'use strict';

const chessBoard = {
    wrapper: document.getElementById('wrapper'),

    isBlack(row, col) {
        return !((row + col) % 2);
    },

    getCellClass(row, col) {
        if (
            (!row && !col) ||
            (!row && col === 9) ||
            (row === 9 && !col) ||
            (row === 9 && col === 9)
        )
            return 'corner';
        else if (!col || col === 9) return 'number';
        else if (!row || row === 9) return 'letter';
        else {
            if (this.isBlack(row, col)) return 'black';

            return 'white';
        }
    },

    getCell(row, col) {
        const letters = 'ABCDEFGH'.split('');
        const cell = document.createElement('td');
        const cellClass = this.getCellClass(row, col);

        if (cellClass === 'letter') cell.innerHTML = letters[col - 1];
        if (cellClass === 'number') cell.innerHTML = row;
        cell.classList.add(cellClass);

        return cell;
    },

    render() {
        const table = document.createElement('table');
        table.classList.add('board');
        this.wrapper.append(table);

        for (let row = 9; row >= 0; row--) {
            const tr = document.createElement('tr');
            table.append(tr);

            for (let col = 0; col <= 9; col++) {
                tr.append(this.getCell(row, col));
            }
        }
    },
};

chessBoard.render();
