module.exports = {
    pagination : function(count, offset, limit) {
        let totalCount = count
        let prevOffset = Math.max(0, offset - limit)
        let nextOffset = offset + limit;
        let lastPageOffset = Math.floor(totalCount / limit) * limit
        let navPages = []
        let currentPageNumber = Math.ceil((offset + 1) / limit)

        function getNavItem(number, offset, current) {
            return {
                number : number,
                offset : offset,
                current : current
            }
        }

        navPages = [
            currentPageNumber > 2 ? getNavItem(1, 0, false) : undefined,
            currentPageNumber > 10 ? getNavItem('...', offset - 10, false) : undefined,

            currentPageNumber != 1 ? getNavItem(currentPageNumber - 1, prevOffset, false) : undefined,
            getNavItem(currentPageNumber, offset, true),
            getNavItem(currentPageNumber + 1, nextOffset, false),
            currentPageNumber == 1 ? getNavItem(currentPageNumber + 2, nextOffset + limit, false) : undefined,

            currentPageNumber < (lastPageOffset - limit) ? getNavItem('...', offset + 10, false) : undefined,
            getNavItem(Math.ceil(lastPageOffset / limit) + 1, lastPageOffset, false),
        ]

        return {
            count : {
                posts : totalCount,
                pages : currentPageNumber
            },
            control : {
                prev : offset != 0 ? {
                    number : Math.ceil(prevOffset / limit) + 1,
                    offset : prevOffset
                } : null,
                current : {
                    number : Math.ceil((offset + 1) / limit),
                    offset : offset
                },
                next : nextOffset <= lastPageOffset ? {
                    number : Math.ceil(nextOffset / limit) + 1,
                    offset : nextOffset
                } : null,
                last : {
                    number : Math.ceil(lastPageOffset / limit) + 1,
                    offset : lastPageOffset
                }
            },
            nav : navPages
        }
    }
}
