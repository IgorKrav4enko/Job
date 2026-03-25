(function () {
  const textVisualizations = {
    "beginner-recursion::sum-numbers-recursive": [
      "sum([5,2,9])",
      "└─ 5 + sum([2,9])",
      "   └─ 2 + sum([9])",
      "      └─ 9 + sum([])",
      "         └─ 0"
    ]
  };

  const canvasVisualizationTypes = {
    "beginner-recursion::sum-numbers-recursive": "sum-numbers-recursive"
  };

  const drawSumNumbersRecursiveCanvas = (canvas, progress = 1) => {
    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = "#fffaf0";
    ctx.fillRect(0, 0, width, height);

    const cardWidth = Math.min(width - 48, 220);
    const startX = 28;
    const startY = 28;
    const stepY = 62;
    const nodes = [
      { x: startX, y: startY, label: "sum([5,2,9])", sub: "start" },
      { x: startX + 28, y: startY + stepY, label: "5 + sum([2,9])", sub: "take first" },
      { x: startX + 56, y: startY + stepY * 2, label: "2 + sum([9])", sub: "shrink array" },
      { x: startX + 84, y: startY + stepY * 3, label: "9 + sum([])", sub: "base near" },
      { x: startX + 112, y: startY + stepY * 4, label: "0", sub: "base case" }
    ];

    ctx.strokeStyle = "#d4a373";
    ctx.lineWidth = 2;
    const visibleNodeCount = Math.max(1, Math.ceil(progress * nodes.length));
    const visibleEdgeCount = Math.max(0, visibleNodeCount - 1);

    for (let i = 0; i < visibleEdgeCount; i += 1) {
      const from = nodes[i];
      const to = nodes[i + 1];
      const edgeProgress = Math.min(1, Math.max(0, progress * nodes.length - (i + 1)));
      const lineStartX = from.x + cardWidth / 2;
      const lineStartY = from.y + 42;
      const endX = to.x + cardWidth / 2 - 18;
      const endY = to.y;
      const currentX = lineStartX + (endX - lineStartX) * edgeProgress;
      const currentY = lineStartY + (endY - lineStartY) * edgeProgress;

      ctx.beginPath();
      ctx.moveTo(lineStartX, lineStartY);
      ctx.lineTo(currentX, currentY);
      ctx.stroke();

      if (edgeProgress === 1) {
        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(endX - 8, endY + 10);
        ctx.moveTo(endX, endY);
        ctx.lineTo(endX + 8, endY + 10);
        ctx.stroke();
      }
    }

    nodes.slice(0, visibleNodeCount).forEach((node, index) => {
      const appearProgress = Math.min(1, Math.max(0, progress * nodes.length - index));
      ctx.save();
      ctx.globalAlpha = appearProgress;
      ctx.fillStyle = index === nodes.length - 1 ? "#4f6d5d" : "#ffffff";
      ctx.strokeStyle = index === nodes.length - 1 ? "#4f6d5d" : "#ddd2bf";
      ctx.lineWidth = 1.5;
      const nodeCardWidth = index === nodes.length - 1 ? 92 : cardWidth;
      const cardHeight = 42;
      const radius = 16;
      const x = node.x;
      const y = node.y;

      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.arcTo(x + nodeCardWidth, y, x + nodeCardWidth, y + cardHeight, radius);
      ctx.arcTo(x + nodeCardWidth, y + cardHeight, x, y + cardHeight, radius);
      ctx.arcTo(x, y + cardHeight, x, y, radius);
      ctx.arcTo(x, y, x + nodeCardWidth, y, radius);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = index === nodes.length - 1 ? "#fffaf0" : "#1f1d1a";
      ctx.font = "600 13px Manrope";
      ctx.fillText(node.label, x + 14, y + 18);
      ctx.font = "11px Space Grotesk";
      ctx.fillStyle = index === nodes.length - 1 ? "rgba(255,250,240,0.8)" : "rgba(31,29,26,0.62)";
      ctx.fillText(node.sub, x + 14, y + 33);
      ctx.restore();
    });

    const returnProgress = Math.max(0, (progress - 0.82) / 0.18);
    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 13px Manrope";
    ctx.globalAlpha = returnProgress;
    ctx.fillText("Return path", 24, height - 18);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("0  ->  9  ->  11  ->  16", 116, height - 18);
    ctx.globalAlpha = 1;
  };

  const mountCanvasVisualization = (canvas, type) => {
    if (type === "sum-numbers-recursive") {
      if (canvas._animationFrameId) {
        cancelAnimationFrame(canvas._animationFrameId);
      }

      const start = performance.now();
      const duration = 1400;

      const tick = (now) => {
        const progress = Math.min(1, (now - start) / duration);
        drawSumNumbersRecursiveCanvas(canvas, progress);
        if (progress < 1) {
          canvas._animationFrameId = requestAnimationFrame(tick);
        }
      };

      canvas._animationFrameId = requestAnimationFrame(tick);
    }
  };

  window.StructyVisualizations = {
    getTextVisualization(taskKey) {
      return textVisualizations[taskKey] || null;
    },
    getCanvasType(taskKey) {
      return canvasVisualizationTypes[taskKey] || null;
    },
    mountCanvasVisualization
  };
})();
