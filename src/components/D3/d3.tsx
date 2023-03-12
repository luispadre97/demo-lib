import React, { useRef, useEffect } from "react"
import * as d3 from "d3"
import { gsap } from "gsap"

interface BarChartData {
	name: string
	value: number
}

interface BarChartProps {
	data: BarChartData[]
	width: number
	height: number
	color?: string
	textColor?: string
	xAxisLabel?: string
	yAxisLabel?: string
	margin?: { top: number; right: number; bottom: number; left: number }
}

const defaultMargin = { top: 20, right: 30, bottom: 30, left: 40 }
const defaultColor = "skyblue"
const defaultTextColor = "black"

const BarChart: React.FC<BarChartProps> = ({
	data,
	width,
	height,
	color = defaultColor,
	textColor = defaultTextColor,
	xAxisLabel,
	yAxisLabel,
	margin = defaultMargin,
}) => {
	const svgRef = useRef<SVGSVGElement>(null)

  const [applyZoom, setApplyZoom] = useState(false);

	useEffect(() => {
		if (!svgRef.current || !data) {
			return
		}

		const innerWidth = width - margin.left - margin.right
		const innerHeight = height - margin.top - margin.bottom

		const xScale = d3
			.scaleBand()
			.domain(data.map((d) => d.name))
			.range([0, innerWidth])
			.padding(0.1)

		const yScale = d3
			.scaleLinear()
			.domain([0, d3.max(data, (d) => d.value)])
			.range([innerHeight, 0])

		const svg = d3.select(svgRef.current)
		const g = svg
			.select("g")
			.attr("transform", `translate(${margin.left},${margin.top})`)

		const xAxis = d3.axisBottom(xScale)
		g.append("g").attr("transform", `translate(0, ${innerHeight})`).call(xAxis)

		const yAxis = d3.axisLeft(yScale)
		g.append("g").call(yAxis)

		if (xAxisLabel) {
			svg
				.append("text")
				.attr("x", innerWidth / 2)
				.attr("y", height - 12)
				.attr("text-anchor", "middle")
				.style("font-size", "16px")
				.style("fill", textColor)
				.text(xAxisLabel)
		}

		if (yAxisLabel) {
			svg
				.append("text")
				.attr("transform", "rotate(-90)")
				.attr("x", -innerHeight / 2)
				.attr("y", 20 - 12)
				.attr("text-anchor", "middle")
				.style("font-size", "16px")
				.style("fill", textColor)
				.text(yAxisLabel)
		}

		const bars = g
			.selectAll(".bar")
			.data(data)
			.enter()
			.append("rect")
			.attr("class", "bar")
			.attr("x", (d) => xScale(d.name))
			.attr("y", (d) => yScale(d.value))
			.attr("width", xScale.bandwidth())
			.attr("height", (d) => innerHeight - yScale(d.value))
			.style("fill", color)
			.on("mouseover", function (d) {
				svg
					.selectAll("#tooltip")
					.data([d.value])
					.enter()
					.append("text")
					.attr("id", "tooltip")
					.attr("x", xScale(d.name) + xScale.bandwidth() / 2)
					.attr("y", yScale(d.value) - 10)
					.attr("text-anchor", "middle")
					.style("font-size", "12px")
					.style("fill", textColor)
					.text((d) => d)
				d3.select(this).style("fill", "red")
				svg
					.append("text")
					.attr("id", "tooltip")
					.attr("x", xScale(d.name) + xScale.bandwidth() / 2)
					.attr("y", yScale(d.value) - 10)
					.attr("text-anchor", "middle")
					.style("font-size", "12px")
					.style("fill", textColor)
					.text(d.value)
			}).on("mouseover", function() {
        d3.select(this).style("fill", "red");
      })
      .on("mouseout", function() {
        d3.select(this).style("fill", color);
      });

      
    if (applyZoom) {
      const zoom = d3
        .zoom()
        .scaleExtent([1, 8])
        .translateExtent([[0, 0], [innerWidth, innerHeight]])
        .extent([[0, 0], [innerWidth, innerHeight]])
        .on("zoom", zoomed);
        
      svg.call(zoom);
      
      function zoomed() {
        g.attr("transform", d3.event.transform);
      }
    }

      
		gsap.from(bars.nodes(), {
			duration: 1,
			y: innerHeight,
			height: 0,
			opacity: 0,
			stagger: 0.1,
		})
	}, [
		data,
		svgRef,
		width,
		height,
		color,
		textColor,
		xAxisLabel,
		yAxisLabel,
		margin,
	])

  
	return (
		<svg ref={svgRef} width={width} height={height}>
			<g />
		</svg>
	)
}

export default BarChart
