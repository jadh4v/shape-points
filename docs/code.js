const ShapePoints = require('..')

let c

function test()
{
    draw(c, ShapePoints.roundedRect(125, 100, 150, 100, 30))
    draw(c, ShapePoints.roundedRect(300, 100, 100, 100, { topLeft: 30, bottomLeft: 60 }))
    draw(c, ShapePoints.roundedRect(450, 100, 100, 100, { topRight: 60, bottomRight: 30 }))

    draw(c, ShapePoints.rect(600, 100, 100, 75))

    // draw lighter test line without thickness
    c.globalAlpha = 0.1
    draw(c, ShapePoints.line(700, 50, 750, 125))
    c.globalAlpha = 1

    draw(c, ShapePoints.line(700, 50, 750, 125, 25))

    draw(c, ShapePoints.line(775, 50, 825, 125, { start: 10, end: 50 }))

    draw(c, ShapePoints.circle(125, 250, 75))
}

function circle(c, x, y, radius)
{
    c.beginPath()
    c.arc(x, y, radius, 0, Math.PI * 2)
    c.stroke()
}

function draw(c, points)
{
    c.strokeStyle = 'black'
    c.beginPath()
    c.moveTo(points[0], points[1])
    for (let i = 2; i < points.length; i += 2)
    {
        c.lineTo(points[i], points[i + 1])
    }
    c.closePath()
    c.stroke()
    c.strokeStyle = 'red'
    for (let i = 0; i < points.length; i += 2)
    {
        circle(c, points[i], points[i + 1], 3)
    }
}

window.onload = function ()
{
    const canvas = document.getElementById('canvas')
    canvas.width = 1000
    canvas.height = 400
    c = canvas.getContext('2d')

    test()
    require('./highlight')()
}