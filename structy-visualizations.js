(function () {
  const textVisualizations = {
    "binary-tree-i::max-root-to-leaf-path-sum": [
      "input:",
      "      5",
      "     / \\",
      "    11  3",
      "   / \\   \\",
      "  4   2   1",
      "",
      "goal:",
      "find the largest sum from root down to any leaf",
      "",
      "path sums:",
      "5 -> 11 -> 4 = 20",
      "5 -> 11 -> 2 = 18",
      "5 -> 3 -> 1  = 9",
      "",
      "recursive idea:",
      "at each node, take the better of left subtree and right subtree",
      "then add the current node value",
      "",
      "build back up:",
      "node 11 returns 11 + max(4, 2) = 15",
      "node 3 on the right returns 3 + 1 = 4",
      "root returns 5 + max(15, 4) = 20",
      "",
      "result:",
      "20"
    ],
    "binary-tree-i::tree-path-finder": [
      "input:",
      "target = \"e\"",
      "",
      "      a",
      "     / \\",
      "    b   c",
      "   / \\   \\",
      "  d   e   f",
      "",
      "idea:",
      "search left subtree first, then right subtree",
      "when target is found, build the path while recursion returns",
      "",
      "path found:",
      "e -> [\"e\"]",
      "b -> [\"b\", \"e\"]",
      "a -> [\"a\", \"b\", \"e\"]",
      "",
      "result:",
      "[\"a\", \"b\", \"e\"]"
    ],
    "binary-tree-i::depth-first-values": [
      "input:",
      "      a",
      "     / \\",
      "    b   c",
      "   / \\   \\",
      "  d   e   f",
      "",
      "step 1: use preorder DFS",
      "visit current -> go left -> go right",
      "",
      "step 2: traversal order",
      "a -> b -> d -> e -> c -> f",
      "",
      "result:",
      "[\"a\", \"b\", \"d\", \"e\", \"c\", \"f\"]"
    ],
    "hashing::anagrams": [
      "input:",
      "s1 = \"restful\", s2 = \"fluster\"",
      "",
      "step 1: count characters in s1",
      "r:1 e:1 s:1 t:1 f:1 u:1 l:1",
      "",
      "step 2: walk through s2 and subtract",
      "f -> 0, l -> 0, u -> 0, s -> 0, t -> 0, e -> 0, r -> 0",
      "",
      "why this works:",
      "anagrams must use exactly the same letters the same number of times",
      "",
      "result:",
      "all counts ended at 0, so return true"
    ],
    "hashing::most-frequent-char": [
      "input:",
      "\"bookeeper\"",
      "",
      "step 1: build a frequency map",
      "b:1 o:2 k:2 e:3 p:1 r:1",
      "",
      "step 2: scan the original string left to right",
      "b -> current best is b",
      "o -> count 2 beats 1, best becomes o",
      "k -> count 2 ties o, keep o because it appeared earlier",
      "e -> count 3 beats 2, best becomes e",
      "",
      "result:",
      "return \"e\""
    ],
    "hashing::pair-sum": [
      "input:",
      "numbers = [3,2,5,4,1], target = 8",
      "",
      "step 1: start with an empty map",
      "seen = {}",
      "",
      "step 2: for each number, compute needed = target - current",
      "3 needs 5 -> 5 is not in seen, store 3:0",
      "2 needs 6 -> 6 is not in seen, store 2:1",
      "5 needs 3 -> 3 is already in seen at index 0",
      "",
      "why this works:",
      "when the needed value was seen earlier, those two indices form the answer",
      "",
      "result:",
      "return [0,2]"
    ],
    "hashing::pair-product": [
      "input:",
      "numbers = [3,2,5,4,1], target = 8",
      "",
      "step 1: start with an empty map",
      "seen = {}",
      "",
      "step 2: for each number, compute needed = target / current",
      "3 needs 8/3 -> not found, store 3:0",
      "2 needs 4 -> not found, store 2:1",
      "5 needs 8/5 -> not found, store 5:2",
      "4 needs 2 -> 2 is already in seen at index 1",
      "",
      "why this works:",
      "if previous * current = target, then previous = target / current",
      "",
      "result:",
      "return [1,3]"
    ],
    "hashing::intersection": [
      "input:",
      "a = [4,2,1,6], b = [3,6,9,2,10]",
      "",
      "step 1: put all values of a into a set",
      "setA = {4,2,1,6}",
      "",
      "step 2: scan b and keep only values that are also in setA",
      "3 -> not in setA, skip",
      "6 -> in setA, add to result",
      "9 -> not in setA, skip",
      "2 -> in setA, add to result",
      "10 -> not in setA, skip",
      "",
      "result:",
      "[6,2]"
    ],
    "hashing::exclusive-items": [
      "input:",
      "a = [4,2,1,6], b = [3,6,9,2,10]",
      "",
      "step 1: build a set for each list",
      "setA = {4,2,1,6}",
      "setB = {3,6,9,2,10}",
      "",
      "step 2: collect values that appear in exactly one set",
      "from a: 4 add, 2 skip, 1 add, 6 skip",
      "from b: 3 add, 6 skip, 9 add, 2 skip, 10 add",
      "",
      "why this works:",
      "shared values are ignored, unique values are kept",
      "",
      "result:",
      "[4,1,3,9,10]"
    ],
    "hashing::all-unique": [
      "input:",
      "[\"a\",\"u\",\"t\",\"u\",\"m\",\"n\"]",
      "",
      "step 1: start with an empty set",
      "seen = {}",
      "",
      "step 2: scan the list",
      "a -> not seen before, add it",
      "u -> not seen before, add it",
      "t -> not seen before, add it",
      "u -> already in seen, so we found a duplicate",
      "",
      "result:",
      "return false"
    ],
    "hashing::intersection-with-dupes": [
      "input:",
      "a = [\"a\",\"b\",\"c\",\"b\"]",
      "b = [\"x\",\"y\",\"b\",\"b\"]",
      "",
      "step 1: count values in the first list",
      "a:1 b:2 c:1",
      "",
      "step 2: scan the second list",
      "x -> count is 0, skip",
      "y -> count is 0, skip",
      "b -> count is 2, add \"b\" and decrease count to 1",
      "b -> count is 1, add \"b\" and decrease count to 0",
      "",
      "why this works:",
      "the count map prevents us from adding a value more times than it appears in both lists",
      "",
      "result:",
      "[\"b\",\"b\"]"
    ],
    "beginner-recursion::sum-numbers-recursive": [
      "sum([5,2,9])",
      "└─ 5 + sum([2,9])",
      "   └─ 2 + sum([9])",
      "      └─ 9 + sum([])",
      "         └─ 0"
    ]
  };

  const canvasVisualizationTypes = {
    "binary-tree-i::max-root-to-leaf-path-sum": "max-root-to-leaf-path-sum",
    "binary-tree-i::tree-path-finder": "tree-path-finder",
    "binary-tree-i::depth-first-values": "depth-first-values",
    "hashing::anagrams": "anagrams",
    "hashing::exclusive-items": "exclusive-items",
    "hashing::intersection": "intersection",
    "hashing::pair-product": "pair-product",
    "hashing::pair-sum": "pair-sum",
    "beginner-recursion::sum-numbers-recursive": "sum-numbers-recursive"
  };

  const canvasVisualizationVariants = {
    "binary-tree-i::max-root-to-leaf-path-sum": [
      {
        id: "max-root-to-leaf-path-sum",
        type: "max-root-to-leaf-path-sum",
        title: "Canvas Visualization",
        description: "Покроково показуємо, як рекурсія обчислює суми знизу вгору і вибирає найкращий root-to-leaf шлях."
      }
    ],
    "binary-tree-i::tree-path-finder": [
      {
        id: "tree-path-finder",
        type: "tree-path-finder",
        title: "Build Path On Return",
        description: "Простіша ідея: коли рекурсія повертається назад, щоразу створюємо новий path. Через копіювання списків це O(n^2)."
      },
      {
        id: "tree-path-finder-linear",
        type: "tree-path-finder-linear",
        title: "Backward Path Then Reverse",
        description: "Ефективніший підхід: збираємо один список від target до root, а в кінці розвертаємо його. Це O(n)."
      }
    ]
  };

  const drawRoundedRect = (ctx, x, y, width, height, radius = 16) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
  };

  const cancelCanvasAnimation = (canvas) => {
    if (canvas._animationFrameId) {
      cancelAnimationFrame(canvas._animationFrameId);
      canvas._animationFrameId = null;
    }
  };

  const drawChip = (ctx, x, y, w, h, label, opts = {}) => {
    const {
      fill = "#ffffff",
      stroke = "#ddd2bf",
      text = "#1f1d1a",
      sub = null
    } = opts;
    ctx.save();
    ctx.fillStyle = fill;
    ctx.strokeStyle = stroke;
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, x, y, w, h, 16);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = text;
    ctx.font = "700 16px Manrope";
    ctx.fillText(String(label), x + 16, y + 24);
    if (sub) {
      ctx.font = "11px Space Grotesk";
      ctx.fillStyle = "rgba(31,29,26,0.62)";
      ctx.fillText(sub, x + 16, y + 40);
    }
    ctx.restore();
  };

  const drawPanel = (ctx, x, y, w, h, title) => {
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ddd2bf";
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, x, y, w, h, 18);
    ctx.fill();
    ctx.stroke();
    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 13px Manrope";
    ctx.fillText(title, x + 18, y + 22);
  };

  const drawWrappedText = (ctx, text, x, y, maxWidth, lineHeight = 22) => {
    const words = String(text).split(/\s+/);
    let line = "";
    let currentY = y;

    words.forEach((word) => {
      const nextLine = line ? line + " " + word : word;
      if (ctx.measureText(nextLine).width > maxWidth && line) {
        ctx.fillText(line, x, currentY);
        line = word;
        currentY += lineHeight;
      } else {
        line = nextLine;
      }
    });

    if (line) {
      ctx.fillText(line, x, currentY);
      currentY += lineHeight;
    }

    return currentY;
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

  const drawPairSumCanvas = (canvas, progress = 1) => {
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

    const numbers = [3, 2, 5, 4, 1];
    const target = 8;
    const steps = [
      {
        activeIndex: 0,
        needed: 5,
        explanation: "Look at 3. To reach 8, we would need 5.",
        seen: [],
        found: false,
        result: null
      },
      {
        activeIndex: 0,
        needed: 5,
        explanation: "5 is not in the map yet, so store 3 at index 0.",
        seen: [[3, 0]],
        found: false,
        result: null
      },
      {
        activeIndex: 1,
        needed: 6,
        explanation: "Now look at 2. To reach 8, we would need 6.",
        seen: [[3, 0]],
        found: false,
        result: null
      },
      {
        activeIndex: 1,
        needed: 6,
        explanation: "6 is not in the map, so store 2 at index 1.",
        seen: [[3, 0], [2, 1]],
        found: false,
        result: null
      },
      {
        activeIndex: 2,
        needed: 3,
        explanation: "Now look at 5. To reach 8, we would need 3.",
        seen: [[3, 0], [2, 1]],
        found: false,
        result: null
      },
      {
        activeIndex: 2,
        needed: 3,
        explanation: "3 is already in the map at index 0, so we found the pair.",
        seen: [[3, 0], [2, 1]],
        found: true,
        result: [0, 2]
      }
    ];

    const currentStepIndex = Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.12) * steps.length));
    const step = steps[currentStepIndex];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Pair Sum Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("numbers = [3, 2, 5, 4, 1], target = 8", 24, 48);

    const boxY = 72;
    const boxW = 64;
    const gap = 12;
    const totalW = numbers.length * boxW + (numbers.length - 1) * gap;
    const startX = Math.max(24, (width - totalW) / 2);

    numbers.forEach((num, index) => {
      const x = startX + index * (boxW + gap);
      const isActive = index === step.activeIndex;
      const isResult = step.result && step.result.includes(index);

      ctx.save();
      ctx.fillStyle = isResult ? "#4f6d5d" : isActive ? "#d4a373" : "#ffffff";
      ctx.strokeStyle = isResult ? "#4f6d5d" : isActive ? "#d4a373" : "#ddd2bf";
      ctx.lineWidth = isActive || isResult ? 2 : 1.5;
      drawRoundedRect(ctx, x, boxY, boxW, 56, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isResult ? "#fffaf0" : "#1f1d1a";
      ctx.font = "700 20px Manrope";
      ctx.fillText(String(num), x + 24, boxY + 32);
      ctx.font = "11px Space Grotesk";
      ctx.fillStyle = isResult ? "rgba(255,250,240,0.85)" : "rgba(31,29,26,0.62)";
      ctx.fillText("i=" + index, x + 19, boxY + 47);
      ctx.restore();
    });

    const infoY = 160;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ddd2bf";
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, 24, infoY, width - 48, 86, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 13px Manrope";
    ctx.fillText("Current step", 42, infoY + 22);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("current = " + numbers[step.activeIndex] + "   |   needed = " + step.needed, 42, infoY + 44);
    ctx.fillText(step.explanation, 42, infoY + 66);

    const mapY = 266;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ddd2bf";
    drawRoundedRect(ctx, 24, mapY, width - 48, 72, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 13px Manrope";
    ctx.fillText("seen map", 42, mapY + 22);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    const seenText = step.seen.length
      ? "{ " + step.seen.map(([value, index]) => value + ":" + index).join(", ") + " }"
      : "{ }";
    ctx.fillText(seenText, 42, mapY + 46);

    if (step.found && step.result) {
      ctx.fillStyle = "#4f6d5d";
      ctx.font = "700 13px Manrope";
      ctx.fillText("result", 42, mapY + 64);
      ctx.font = "12px Space Grotesk";
      ctx.fillText("return [" + step.result.join(", ") + "]", 90, mapY + 64);
    } else {
      ctx.fillStyle = "rgba(31,29,26,0.58)";
      ctx.font = "12px Space Grotesk";
      ctx.fillText("No pair found yet. Keep scanning.", 42, mapY + 64);
    }
  };

  const drawPairProductCanvas = (canvas, progress = 1) => {
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

    const numbers = [3, 2, 5, 4, 1];
    const target = 8;
    const steps = [
      {
        activeIndex: 0,
        needed: "8/3",
        explanation: "Look at 3. To reach product 8, we would need 8/3.",
        seen: [],
        found: false,
        result: null
      },
      {
        activeIndex: 0,
        needed: "8/3",
        explanation: "8/3 is not in the map, so store 3 at index 0.",
        seen: [[3, 0]],
        found: false,
        result: null
      },
      {
        activeIndex: 1,
        needed: "4",
        explanation: "Now look at 2. To reach product 8, we would need 4.",
        seen: [[3, 0]],
        found: false,
        result: null
      },
      {
        activeIndex: 1,
        needed: "4",
        explanation: "4 is not in the map, so store 2 at index 1.",
        seen: [[3, 0], [2, 1]],
        found: false,
        result: null
      },
      {
        activeIndex: 2,
        needed: "8/5",
        explanation: "Now look at 5. To reach product 8, we would need 8/5.",
        seen: [[3, 0], [2, 1]],
        found: false,
        result: null
      },
      {
        activeIndex: 2,
        needed: "8/5",
        explanation: "8/5 is not in the map, so store 5 at index 2.",
        seen: [[3, 0], [2, 1], [5, 2]],
        found: false,
        result: null
      },
      {
        activeIndex: 3,
        needed: "2",
        explanation: "Now look at 4. To reach product 8, we would need 2.",
        seen: [[3, 0], [2, 1], [5, 2]],
        found: false,
        result: null
      },
      {
        activeIndex: 3,
        needed: "2",
        explanation: "2 is already in the map at index 1, so we found the pair.",
        seen: [[3, 0], [2, 1], [5, 2]],
        found: true,
        result: [1, 3]
      }
    ];

    const currentStepIndex = Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.12) * steps.length));
    const step = steps[currentStepIndex];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Pair Product Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("numbers = [3, 2, 5, 4, 1], target = 8", 24, 48);

    const boxY = 72;
    const boxW = 64;
    const gap = 12;
    const totalW = numbers.length * boxW + (numbers.length - 1) * gap;
    const startX = Math.max(24, (width - totalW) / 2);

    numbers.forEach((num, index) => {
      const x = startX + index * (boxW + gap);
      const isActive = index === step.activeIndex;
      const isResult = step.result && step.result.includes(index);

      ctx.save();
      ctx.fillStyle = isResult ? "#4f6d5d" : isActive ? "#d4a373" : "#ffffff";
      ctx.strokeStyle = isResult ? "#4f6d5d" : isActive ? "#d4a373" : "#ddd2bf";
      ctx.lineWidth = isActive || isResult ? 2 : 1.5;
      drawRoundedRect(ctx, x, boxY, boxW, 56, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = isResult ? "#fffaf0" : "#1f1d1a";
      ctx.font = "700 20px Manrope";
      ctx.fillText(String(num), x + 24, boxY + 32);
      ctx.font = "11px Space Grotesk";
      ctx.fillStyle = isResult ? "rgba(255,250,240,0.85)" : "rgba(31,29,26,0.62)";
      ctx.fillText("i=" + index, x + 19, boxY + 47);
      ctx.restore();
    });

    const infoY = 160;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ddd2bf";
    ctx.lineWidth = 1.5;
    drawRoundedRect(ctx, 24, infoY, width - 48, 86, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 13px Manrope";
    ctx.fillText("Current step", 42, infoY + 22);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("current = " + numbers[step.activeIndex] + "   |   needed = " + step.needed, 42, infoY + 44);
    ctx.fillText(step.explanation, 42, infoY + 66);

    const mapY = 266;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#ddd2bf";
    drawRoundedRect(ctx, 24, mapY, width - 48, 72, 18);
    ctx.fill();
    ctx.stroke();

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 13px Manrope";
    ctx.fillText("seen map", 42, mapY + 22);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    const seenText = step.seen.length
      ? "{ " + step.seen.map(([value, index]) => value + ":" + index).join(", ") + " }"
      : "{ }";
    ctx.fillText(seenText, 42, mapY + 46);

    if (step.found && step.result) {
      ctx.fillStyle = "#4f6d5d";
      ctx.font = "700 13px Manrope";
      ctx.fillText("result", 42, mapY + 64);
      ctx.font = "12px Space Grotesk";
      ctx.fillText("return [" + step.result.join(", ") + "]", 90, mapY + 64);
    } else {
      ctx.fillStyle = "rgba(31,29,26,0.58)";
      ctx.font = "12px Space Grotesk";
      ctx.fillText("No pair found yet. Keep scanning.", 42, mapY + 64);
    }
  };

  const drawIntersectionCanvas = (canvas, progress = 1) => {
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

    const a = [4, 2, 1, 6];
    const b = [3, 6, 9, 2, 10];
    const steps = [
      { active: null, inSet: [], result: [], text: "Step 1: build a set from list a -> {4,2,1,6}" },
      { active: 0, inSet: [], result: [], text: "Scan b: 3 is not in setA, so skip it." },
      { active: 1, inSet: [1], result: [6], text: "Scan b: 6 is in setA, so add it to the result." },
      { active: 2, inSet: [1], result: [6], text: "Scan b: 9 is not in setA, so skip it." },
      { active: 3, inSet: [1, 3], result: [6, 2], text: "Scan b: 2 is in setA, so add it to the result." },
      { active: 4, inSet: [1, 3], result: [6, 2], text: "Scan b: 10 is not in setA, so skip it." }
    ];
    const step = steps[Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.12) * steps.length))];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Intersection Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("a = [4,2,1,6], b = [3,6,9,2,10]", 24, 48);

    drawPanel(ctx, 24, 64, width - 48, 82, "setA from list a");
    a.forEach((num, i) => drawChip(ctx, 42 + i * 74, 92, 58, 38, num, { fill: "#ffffff" }));

    drawPanel(ctx, 24, 162, width - 48, 86, "scan list b");
    b.forEach((num, i) => {
      const isActive = step.active === i;
      const isHit = step.inSet.includes(i);
      drawChip(ctx, 42 + i * 74, 190, 58, 38, num, {
        fill: isHit ? "#4f6d5d" : isActive ? "#d4a373" : "#ffffff",
        stroke: isHit ? "#4f6d5d" : isActive ? "#d4a373" : "#ddd2bf",
        text: isHit ? "#fffaf0" : "#1f1d1a"
      });
    });

    drawPanel(ctx, 24, 264, width - 48, 74, "result");
    const resultText = step.result.length ? "[ " + step.result.join(", ") + " ]" : "[ ]";
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText(resultText, 42, 308);
    ctx.fillText(step.text, 42, 326);
  };

  const drawExclusiveItemsCanvas = (canvas, progress = 1) => {
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

    const a = [4, 2, 1, 6];
    const b = [3, 6, 9, 2, 10];
    const steps = [
      { side: "a", active: 0, result: [4], text: "4 appears only in a, so add it." },
      { side: "a", active: 1, result: [4], text: "2 appears in both lists, so skip it." },
      { side: "a", active: 2, result: [4, 1], text: "1 appears only in a, so add it." },
      { side: "a", active: 3, result: [4, 1], text: "6 appears in both lists, so skip it." },
      { side: "b", active: 0, result: [4, 1, 3], text: "3 appears only in b, so add it." },
      { side: "b", active: 1, result: [4, 1, 3], text: "6 appears in both lists, so skip it." },
      { side: "b", active: 2, result: [4, 1, 3, 9], text: "9 appears only in b, so add it." },
      { side: "b", active: 3, result: [4, 1, 3, 9], text: "2 appears in both lists, so skip it." },
      { side: "b", active: 4, result: [4, 1, 3, 9, 10], text: "10 appears only in b, so add it." }
    ];
    const step = steps[Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.12) * steps.length))];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Exclusive Items Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("a = [4,2,1,6], b = [3,6,9,2,10]", 24, 48);

    drawPanel(ctx, 24, 64, width - 48, 82, "scan list a");
    a.forEach((num, i) => drawChip(ctx, 42 + i * 74, 92, 58, 38, num, {
      fill: step.side === "a" && step.active === i ? "#d4a373" : "#ffffff",
      stroke: step.side === "a" && step.active === i ? "#d4a373" : "#ddd2bf"
    }));

    drawPanel(ctx, 24, 162, width - 48, 82, "scan list b");
    b.forEach((num, i) => drawChip(ctx, 42 + i * 74, 190, 58, 38, num, {
      fill: step.side === "b" && step.active === i ? "#d4a373" : "#ffffff",
      stroke: step.side === "b" && step.active === i ? "#d4a373" : "#ddd2bf"
    }));

    drawPanel(ctx, 24, 260, width - 48, 82, "result");
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("[ " + step.result.join(", ") + " ]", 42, 304);
    ctx.fillText(step.text, 42, 322);
  };

  const drawAnagramsCanvas = (canvas, progress = 1) => {
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

    const s1 = ["r", "e", "s", "t", "f", "u", "l"];
    const s2 = ["f", "l", "u", "s", "t", "e", "r"];
    const steps = [
      {
        mode: "build",
        activeIndex: null,
        counts: "{}",
        explanation: "Start with an empty count map.",
        result: "We will first add counts from s1."
      },
      {
        mode: "build",
        activeIndex: 0,
        counts: "r:1",
        explanation: "Start with s1. Count the first letter: r becomes 1.",
        result: "Not finished yet."
      },
      {
        mode: "build",
        activeIndex: 1,
        counts: "r:1 e:1",
        explanation: "Next letter is e, so add e with count 1.",
        result: "Keep building the map from s1."
      },
      {
        mode: "build",
        activeIndex: 2,
        counts: "r:1 e:1 s:1",
        explanation: "Next letter is s, so add s with count 1.",
        result: "Keep building the map from s1."
      },
      {
        mode: "build",
        activeIndex: 3,
        counts: "r:1 e:1 s:1 t:1",
        explanation: "Next letter is t, so add t with count 1.",
        result: "Keep building the map from s1."
      },
      {
        mode: "build",
        activeIndex: 4,
        counts: "r:1 e:1 s:1 t:1 f:1",
        explanation: "Next letter is f, so add f with count 1.",
        result: "Keep building the map from s1."
      },
      {
        mode: "build",
        activeIndex: 5,
        counts: "r:1 e:1 s:1 t:1 f:1 u:1",
        explanation: "Next letter is u, so add u with count 1.",
        result: "Keep building the map from s1."
      },
      {
        mode: "build",
        activeIndex: 6,
        counts: "r:1 e:1 s:1 t:1 f:1 u:1 l:1",
        explanation: "After scanning all of s1, every letter has count 1.",
        result: "Now switch to s2 and subtract."
      },
      {
        mode: "subtract",
        activeIndex: 0,
        counts: "r:1 e:1 s:1 t:1 f:0 u:1 l:1",
        explanation: "Read s2. The first letter is f, so decrease f from 1 to 0.",
        result: "Counts are moving toward zero."
      },
      {
        mode: "subtract",
        activeIndex: 1,
        counts: "r:1 e:1 s:1 t:1 f:0 u:1 l:0",
        explanation: "Next letter is l, so decrease l from 1 to 0.",
        result: "More letters are balanced."
      },
      {
        mode: "subtract",
        activeIndex: 2,
        counts: "r:1 e:1 s:1 t:1 f:0 u:0 l:0",
        explanation: "Next letter is u, so decrease u from 1 to 0.",
        result: "More letters are balanced."
      },
      {
        mode: "subtract",
        activeIndex: 3,
        counts: "r:1 e:1 s:0 t:1 f:0 u:0 l:0",
        explanation: "Next letter is s, so decrease s from 1 to 0.",
        result: "More letters are balanced."
      },
      {
        mode: "subtract",
        activeIndex: 4,
        counts: "r:1 e:1 s:0 t:0 f:0 u:0 l:0",
        explanation: "Next letter is t, so decrease t from 1 to 0.",
        result: "More letters are balanced."
      },
      {
        mode: "subtract",
        activeIndex: 5,
        counts: "r:1 e:0 s:0 t:0 f:0 u:0 l:0",
        explanation: "Next letter is e, so decrease e from 1 to 0.",
        result: "Almost done."
      },
      {
        mode: "subtract",
        activeIndex: 6,
        counts: "r:0 e:0 s:0 t:0 f:0 u:0 l:0",
        explanation: "Last letter is r, so decrease r from 1 to 0.",
        result: "That means the two strings use the same letters the same number of times."
      },
      {
        mode: "done",
        activeIndex: null,
        counts: "r:0 e:0 s:0 t:0 f:0 u:0 l:0",
        explanation: "Final check: all counts are zero.",
        result: "Return true."
      }
    ];
    const step = steps[Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.08) * steps.length))];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Anagrams Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText('s1 = "restful", s2 = "fluster"', 24, 48);

    drawPanel(ctx, 24, 68, width - 48, 98, "step 1: build counts from s1");
    s1.forEach((char, index) => {
      drawChip(ctx, 42 + index * 48, 104, 38, 34, char, {
        fill: step.mode === "build" && step.activeIndex === index ? "#d4a373" : "#ffffff",
        stroke: step.mode === "build" && step.activeIndex === index ? "#d4a373" : "#ddd2bf"
      });
    });

    drawPanel(ctx, 24, 182, width - 48, 98, "step 2: subtract using s2");
    s2.forEach((char, index) => {
      drawChip(ctx, 42 + index * 48, 218, 38, 34, char, {
        fill: step.mode === "subtract" && step.activeIndex === index ? "#d4a373" : "#ffffff",
        stroke: step.mode === "subtract" && step.activeIndex === index ? "#d4a373" : "#ddd2bf"
      });
    });

    drawPanel(ctx, 24, 296, width - 48, 72, "count map");
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText(step.counts, 42, 340);

    drawPanel(ctx, 24, 384, width - 48, 82, "current explanation");
    ctx.fillText(step.explanation, 42, 428);
    ctx.fillText(step.result, 42, 446);
  };

  const drawDepthFirstValuesCanvas = (canvas, progress = 1) => {
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

    const nodes = {
      a: { x: 250, y: 92 },
      b: { x: 150, y: 172 },
      c: { x: 350, y: 172 },
      d: { x: 92, y: 252 },
      e: { x: 208, y: 252 },
      f: { x: 408, y: 252 }
    };
    const edges = [
      ["a", "b"],
      ["a", "c"],
      ["b", "d"],
      ["b", "e"],
      ["c", "f"]
    ];
    const steps = [
      { current: "a", stack: ["a"], result: [], text: "Start with the root. Put a on the stack." },
      { current: "a", stack: ["c", "b"], result: ["a"], text: "Pop a, record it, then push c and b. Push right first so left is processed next." },
      { current: "b", stack: ["c", "e", "d"], result: ["a", "b"], text: "Pop b, record it, then push e and d." },
      { current: "d", stack: ["c", "e"], result: ["a", "b", "d"], text: "Pop d. It has no children, so just record it." },
      { current: "e", stack: ["c"], result: ["a", "b", "d", "e"], text: "Pop e. It also has no children." },
      { current: "c", stack: ["f"], result: ["a", "b", "d", "e", "c"], text: "Pop c, record it, then push f." },
      { current: "f", stack: [], result: ["a", "b", "d", "e", "c", "f"], text: "Pop f. Traversal is complete." }
    ];
    const step = steps[Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.14) * steps.length))];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Depth First Values Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("preorder traversal: current -> left -> right", 24, 48);

    ctx.strokeStyle = "#d4a373";
    ctx.lineWidth = 2;
    edges.forEach(([from, to]) => {
      ctx.beginPath();
      ctx.moveTo(nodes[from].x, nodes[from].y);
      ctx.lineTo(nodes[to].x, nodes[to].y);
      ctx.stroke();
    });

    Object.entries(nodes).forEach(([key, pos]) => {
      const isCurrent = step.current === key;
      const isVisited = step.result.includes(key);
      ctx.save();
      ctx.fillStyle = isCurrent ? "#d4a373" : isVisited ? "#4f6d5d" : "#ffffff";
      ctx.strokeStyle = isCurrent ? "#d4a373" : isVisited ? "#4f6d5d" : "#ddd2bf";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = isCurrent || isVisited ? "#fffaf0" : "#1f1d1a";
      ctx.font = "700 16px Manrope";
      ctx.fillText(key, pos.x - 5, pos.y + 5);
      ctx.restore();
    });

    drawPanel(ctx, 470, 74, width - 494, 112, "stack");
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText(step.stack.length ? "[ " + step.stack.join(", ") + " ]" : "[ ]", 488, 118);
    ctx.fillText("top of stack is on the right", 488, 140);

    drawPanel(ctx, 470, 204, width - 494, 112, "result");
    ctx.fillText("[ " + step.result.join(", ") + " ]", 488, 248);

    drawPanel(ctx, 24, 338, width - 48, 84, "current explanation");
    ctx.fillText(step.text, 42, 382);
  };

  const drawTreePathFinderCanvas = (canvas, progress = 1) => {
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

    const nodes = {
      a: { x: 220, y: 88 },
      b: { x: 130, y: 166 },
      c: { x: 310, y: 166 },
      d: { x: 82, y: 246 },
      e: { x: 178, y: 246 },
      f: { x: 358, y: 246 }
    };
    const edges = [
      ["a", "b"],
      ["a", "c"],
      ["b", "d"],
      ["b", "e"],
      ["c", "f"]
    ];
    const steps = [
      {
        current: "a",
        searchPath: ["a"],
        returnedPath: null,
        text: "Start at a. It is not the target, so go left first."
      },
      {
        current: "b",
        searchPath: ["a", "b"],
        returnedPath: null,
        text: "Now we are at b. It is not the target, so try its left child first."
      },
      {
        current: "d",
        searchPath: ["a", "b", "d"],
        returnedPath: null,
        text: "Node d is not the target and has no children, so this branch returns null."
      },
      {
        current: "b",
        searchPath: ["a", "b"],
        returnedPath: null,
        text: "We are back at b. Left subtree failed, so now try the right child."
      },
      {
        current: "e",
        searchPath: ["a", "b", "e"],
        returnedPath: ["e"],
        text: "Node e matches the target, so return [\"e\"]."
      },
      {
        current: "b",
        searchPath: ["a", "b"],
        returnedPath: ["b", "e"],
        text: "The right subtree returned [\"e\"], so prepend b -> [\"b\", \"e\"]."
      },
      {
        current: "a",
        searchPath: ["a"],
        returnedPath: ["a", "b", "e"],
        text: "The left subtree returned [\"b\", \"e\"], so prepend a -> [\"a\", \"b\", \"e\"]."
      },
      {
        current: "a",
        searchPath: ["a"],
        returnedPath: ["a", "b", "e"],
        text: "Return the completed path to the caller."
      }
    ];
    const step = steps[Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.12) * steps.length))];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Tree Path Finder Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText('target = "e"', 24, 48);

    ctx.strokeStyle = "#d4a373";
    ctx.lineWidth = 2;
    edges.forEach(([from, to]) => {
      ctx.beginPath();
      ctx.moveTo(nodes[from].x, nodes[from].y);
      ctx.lineTo(nodes[to].x, nodes[to].y);
      ctx.stroke();
    });

    Object.entries(nodes).forEach(([key, pos]) => {
      const isCurrent = step.current === key;
      const inSearchPath = step.searchPath.includes(key);
      const inReturnedPath = step.returnedPath && step.returnedPath.includes(key);
      const isTarget = key === "e";
      ctx.save();
      ctx.fillStyle = inReturnedPath ? "#4f6d5d" : isCurrent ? "#d4a373" : inSearchPath ? "#f0e0c9" : "#ffffff";
      ctx.strokeStyle = isTarget ? "#4f6d5d" : inReturnedPath ? "#4f6d5d" : isCurrent ? "#d4a373" : "#ddd2bf";
      ctx.lineWidth = isTarget ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = inReturnedPath || isCurrent ? "#fffaf0" : "#1f1d1a";
      ctx.font = "700 16px Manrope";
      ctx.fillText(key, pos.x - 5, pos.y + 5);
      ctx.restore();
    });

    drawPanel(ctx, 420, 72, width - 444, 102, "search path");
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("[ " + step.searchPath.join(", ") + " ]", 438, 116);
    ctx.fillText("current node: " + step.current, 438, 142);
    ctx.fillText("target node is e", 438, 160);

    drawPanel(ctx, 420, 192, width - 444, 110, "returned path");
    ctx.fillText(step.returnedPath ? "[ " + step.returnedPath.join(", ") + " ]" : "null", 438, 236);
    ctx.fillText(step.returnedPath ? "This path is bubbling back up." : "Nothing has been returned yet.", 438, 262);

    drawPanel(ctx, 24, 338, width - 48, 86, "what happens now");
    ctx.fillText(step.text, 42, 382);
  };

  const drawTreePathFinderLinearCanvas = (canvas, progress = 1) => {
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

    const nodes = {
      a: { x: 220, y: 88 },
      b: { x: 130, y: 166 },
      c: { x: 310, y: 166 },
      d: { x: 82, y: 246 },
      e: { x: 178, y: 246 },
      f: { x: 358, y: 246 }
    };
    const edges = [
      ["a", "b"],
      ["a", "c"],
      ["b", "d"],
      ["b", "e"],
      ["c", "f"]
    ];
    const steps = [
      {
        current: "a",
        searchPath: ["a"],
        backwardPath: null,
        finalPath: null,
        text: "Start at a. This solution still searches left subtree first."
      },
      {
        current: "b",
        searchPath: ["a", "b"],
        backwardPath: null,
        finalPath: null,
        text: "At b, go left first before checking the right child."
      },
      {
        current: "d",
        searchPath: ["a", "b", "d"],
        backwardPath: null,
        finalPath: null,
        text: "d is not the target, so this branch returns null."
      },
      {
        current: "b",
        searchPath: ["a", "b"],
        backwardPath: null,
        finalPath: null,
        text: "Back at b. Left failed, so now check the right child."
      },
      {
        current: "e",
        searchPath: ["a", "b", "e"],
        backwardPath: ["e"],
        finalPath: null,
        text: "Found e. Start a list with just the target: [\"e\"]."
      },
      {
        current: "b",
        searchPath: ["a", "b"],
        backwardPath: ["e", "b"],
        finalPath: null,
        text: "Return to b and append it to the same list -> [\"e\", \"b\"]."
      },
      {
        current: "a",
        searchPath: ["a"],
        backwardPath: ["e", "b", "a"],
        finalPath: null,
        text: "Return to a and append it -> [\"e\", \"b\", \"a\"]."
      },
      {
        current: "a",
        searchPath: ["a"],
        backwardPath: ["e", "b", "a"],
        finalPath: ["a", "b", "e"],
        text: "Now reverse that list to get the final path from root to target."
      }
    ];
    const step = steps[Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.12) * steps.length))];

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Tree Path Finder Linear Walkthrough", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText('target = "e"', 24, 48);

    ctx.strokeStyle = "#d4a373";
    ctx.lineWidth = 2;
    edges.forEach(([from, to]) => {
      ctx.beginPath();
      ctx.moveTo(nodes[from].x, nodes[from].y);
      ctx.lineTo(nodes[to].x, nodes[to].y);
      ctx.stroke();
    });

    Object.entries(nodes).forEach(([key, pos]) => {
      const isCurrent = step.current === key;
      const inSearchPath = step.searchPath.includes(key);
      const inBackwardPath = step.backwardPath && step.backwardPath.includes(key);
      const inFinalPath = step.finalPath && step.finalPath.includes(key);
      const isTarget = key === "e";
      ctx.save();
      ctx.fillStyle = inFinalPath
        ? "#4f6d5d"
        : inBackwardPath
          ? "#d4a373"
          : isCurrent
            ? "#d4a373"
            : inSearchPath
              ? "#f0e0c9"
              : "#ffffff";
      ctx.strokeStyle = isTarget ? "#4f6d5d" : inFinalPath ? "#4f6d5d" : inBackwardPath ? "#d4a373" : "#ddd2bf";
      ctx.lineWidth = isTarget ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 22, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = inFinalPath || inBackwardPath || isCurrent ? "#fffaf0" : "#1f1d1a";
      ctx.font = "700 16px Manrope";
      ctx.fillText(key, pos.x - 5, pos.y + 5);
      ctx.restore();
    });

    drawPanel(ctx, 420, 72, width - 444, 102, "search path");
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("[ " + step.searchPath.join(", ") + " ]", 438, 116);
    ctx.fillText("current node: " + step.current, 438, 142);
    ctx.fillText("target node is e", 438, 160);

    drawPanel(ctx, 420, 192, width - 444, 110, "backward path");
    ctx.fillText(step.backwardPath ? "[ " + step.backwardPath.join(", ") + " ]" : "null", 438, 236);
    ctx.fillText(step.backwardPath ? "This path is currently target -> root." : "Nothing has been collected yet.", 438, 262);

    if (step.finalPath) {
      drawPanel(ctx, 420, 320, width - 444, 74, "after reverse");
      ctx.fillText("[ " + step.finalPath.join(", ") + " ]", 438, 364);
    }

    drawPanel(ctx, 24, 410, width - 48, 78, "what happens now");
    ctx.fillText(step.text, 42, 454);
  };

  const drawMaxRootToLeafPathSumCanvas = (canvas, progress = 1) => {
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

    const nodes = {
      a: { x: 220, y: 88, value: 5 },
      b: { x: 130, y: 176, value: 11 },
      c: { x: 310, y: 176, value: 3 },
      d: { x: 82, y: 264, value: 4 },
      e: { x: 178, y: 264, value: 2 },
      f: { x: 358, y: 264, value: 1 }
    };
    const edges = [
      ["a", "b"],
      ["a", "c"],
      ["b", "d"],
      ["b", "e"],
      ["c", "f"]
    ];
    const steps = [
      {
        current: "a",
        activePath: ["a"],
        resolved: {},
        branchCompare: null,
        bestPath: null,
        summary: "Start at root 5. We need the best sum from this node down to any leaf."
      },
      {
        current: "b",
        activePath: ["a", "b"],
        resolved: {},
        branchCompare: null,
        bestPath: null,
        summary: "Go left first. At node 11, we will compare the sums from leaf 4 and leaf 2."
      },
      {
        current: "d",
        activePath: ["a", "b", "d"],
        resolved: { d: 4 },
        branchCompare: null,
        bestPath: null,
        summary: "Leaf 4 returns its own value, so this branch contributes 4."
      },
      {
        current: "e",
        activePath: ["a", "b", "e"],
        resolved: { d: 4, e: 2 },
        branchCompare: { node: "b", left: 4, right: 2, choice: "left" },
        bestPath: null,
        summary: "Leaf 2 also returns its own value. At node 11, left child 4 beats right child 2."
      },
      {
        current: "b",
        activePath: ["a", "b"],
        resolved: { d: 4, e: 2, b: 15 },
        branchCompare: { node: "b", left: 4, right: 2, choice: "left" },
        bestPath: ["b", "d"],
        summary: "Node 11 returns 11 + max(4, 2) = 15, so the best local path is 11 -> 4."
      },
      {
        current: "f",
        activePath: ["a", "c", "f"],
        resolved: { d: 4, e: 2, b: 15, f: 1 },
        branchCompare: null,
        bestPath: ["b", "d"],
        summary: "Now solve the right subtree. Leaf 1 returns 1, so node 3 will build on top of that."
      },
      {
        current: "c",
        activePath: ["a", "c"],
        resolved: { d: 4, e: 2, b: 15, f: 1, c: 4 },
        branchCompare: { node: "c", left: null, right: 1, choice: "right" },
        bestPath: ["b", "d"],
        summary: "Node 3 has only one root-to-leaf option here, so it returns 3 + 1 = 4."
      },
      {
        current: "a",
        activePath: ["a"],
        resolved: { d: 4, e: 2, b: 15, f: 1, c: 4, a: 20 },
        branchCompare: { node: "a", left: 15, right: 4, choice: "left" },
        bestPath: ["a", "b", "d"],
        summary: "Back at the root: left subtree gives 15, right subtree gives 4. Choose left and return 5 + 15 = 20."
      }
    ];
    const step = steps[Math.min(steps.length - 1, Math.floor(Math.max(progress, 0.12) * steps.length))];

    const isEdgeInPath = (path, from, to) => {
      if (!path || path.length < 2) {
        return false;
      }
      for (let i = 0; i < path.length - 1; i += 1) {
        if (path[i] === from && path[i + 1] === to) {
          return true;
        }
      }
      return false;
    };

    ctx.fillStyle = "#1f1d1a";
    ctx.font = "700 14px Manrope";
    ctx.fillText("Max Root To Leaf Path Sum", 24, 28);
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    ctx.fillText("Return the best root-to-leaf sum from each node.", 24, 48);

    edges.forEach(([from, to]) => {
      const inBestPath = isEdgeInPath(step.bestPath, from, to);
      const inActivePath = isEdgeInPath(step.activePath, from, to);
      ctx.save();
      ctx.strokeStyle = inBestPath ? "#4f6d5d" : inActivePath ? "#d4a373" : "#ddd2bf";
      ctx.lineWidth = inBestPath ? 4 : inActivePath ? 3 : 2;
      ctx.beginPath();
      ctx.moveTo(nodes[from].x, nodes[from].y);
      ctx.lineTo(nodes[to].x, nodes[to].y);
      ctx.stroke();
      ctx.restore();
    });

    Object.entries(nodes).forEach(([key, pos]) => {
      const isCurrent = step.current === key;
      const inActivePath = step.activePath && step.activePath.includes(key);
      const inBestPath = step.bestPath && step.bestPath.includes(key);
      const isResolved = Object.prototype.hasOwnProperty.call(step.resolved, key);
      ctx.save();
      ctx.fillStyle = inBestPath
        ? "#4f6d5d"
        : isCurrent
          ? "#d4a373"
          : inActivePath
            ? "#f0e0c9"
            : isResolved
              ? "#efe4d2"
              : "#ffffff";
      ctx.strokeStyle = inBestPath ? "#355244" : isCurrent ? "#b8663f" : isResolved ? "#d4a373" : "#ddd2bf";
      ctx.lineWidth = inBestPath || isCurrent ? 2.5 : 1.5;
      ctx.beginPath();
      ctx.arc(pos.x, pos.y, 24, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();
      ctx.fillStyle = inBestPath || isCurrent ? "#fffaf0" : "#1f1d1a";
      ctx.font = "700 16px Manrope";
      ctx.textAlign = "center";
      ctx.fillText(String(pos.value), pos.x, pos.y + 5);
      if (isResolved) {
        ctx.font = "11px Space Grotesk";
        ctx.fillStyle = inBestPath ? "rgba(255,250,240,0.86)" : "#4f6d5d";
        ctx.fillText("sum " + step.resolved[key], pos.x, pos.y + 42);
      }
      ctx.restore();
    });
    ctx.textAlign = "left";

    const rightPanelX = 388;
    const rightPanelWidth = width - rightPanelX - 24;

    drawPanel(ctx, rightPanelX, 72, rightPanelWidth, 128, "resolved returns");
    ctx.font = "12px Space Grotesk";
    ctx.fillStyle = "rgba(31,29,26,0.72)";
    const resolvedOrder = ["d", "e", "b", "f", "c", "a"]
      .filter((key) => Object.prototype.hasOwnProperty.call(step.resolved, key))
      .map((key) => nodes[key].value + " -> " + step.resolved[key]);
    drawWrappedText(
      ctx,
      resolvedOrder.length ? resolvedOrder.join("   ") : "No subtree sum has returned yet.",
      rightPanelX + 18,
      116,
      rightPanelWidth - 36,
      18
    );
    ctx.fillText("current node: " + nodes[step.current].value, rightPanelX + 18, 150);
    drawWrappedText(
      ctx,
      step.bestPath ? "best path so far is highlighted in green." : "orange shows the recursion branch we are exploring.",
      rightPanelX + 18,
      176,
      rightPanelWidth - 36,
      18
    );

    drawPanel(ctx, rightPanelX, 214, rightPanelWidth, 128, "compare children");
    if (step.branchCompare) {
      const compareNode = nodes[step.branchCompare.node].value;
      const leftText = step.branchCompare.left === null ? "-inf" : String(step.branchCompare.left);
      const rightText = step.branchCompare.right === null ? "-inf" : String(step.branchCompare.right);
      drawWrappedText(
        ctx,
        "at node " + compareNode + ": left = " + leftText + ", right = " + rightText,
        rightPanelX + 18,
        258,
        rightPanelWidth - 36,
        18
      );
      ctx.fillText("choose " + step.branchCompare.choice + " child", rightPanelX + 18, 294);
      ctx.fillText("returned sum = " + step.resolved[step.branchCompare.node], rightPanelX + 18, 318);
    } else {
      drawWrappedText(
        ctx,
        "We are still descending toward leaves.",
        rightPanelX + 18,
        258,
        rightPanelWidth - 36,
        18
      );
      drawWrappedText(
        ctx,
        "A comparison happens once child sums are known.",
        rightPanelX + 18,
        286,
        rightPanelWidth - 36,
        18
      );
    }

    drawPanel(ctx, 24, 356, width - 48, 112, "what happens now");
    drawWrappedText(ctx, step.summary, 42, 400, width - 84, 21);
    if (step.bestPath) {
      drawWrappedText(
        ctx,
        "best root-to-leaf path: " + step.bestPath.map((key) => nodes[key].value).join(" -> "),
        42,
        426,
        width - 84,
        21
      );
    }
  };

  const createCanvasController = (canvas, type) => {
    const configs = {
      anagrams: {
        totalSteps: 16,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.08, stepIndex / 16));
          drawAnagramsCanvas(canvas, progress);
        }
      },
      "depth-first-values": {
        totalSteps: 7,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.14, stepIndex / 7));
          drawDepthFirstValuesCanvas(canvas, progress);
        }
      },
      "max-root-to-leaf-path-sum": {
        totalSteps: 8,
        stepDuration: 460,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.12, stepIndex / 8));
          drawMaxRootToLeafPathSumCanvas(canvas, progress);
        }
      },
      "tree-path-finder": {
        totalSteps: 8,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.12, stepIndex / 8));
          drawTreePathFinderCanvas(canvas, progress);
        }
      },
      "tree-path-finder-linear": {
        totalSteps: 8,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.12, stepIndex / 8));
          drawTreePathFinderLinearCanvas(canvas, progress);
        }
      },
      intersection: {
        totalSteps: 6,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.12, stepIndex / 6));
          drawIntersectionCanvas(canvas, progress);
        }
      },
      "exclusive-items": {
        totalSteps: 9,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.12, stepIndex / 9));
          drawExclusiveItemsCanvas(canvas, progress);
        }
      },
      "pair-product": {
        totalSteps: 8,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.12, stepIndex / 8));
          drawPairProductCanvas(canvas, progress);
        }
      },
      "sum-numbers-recursive": {
        totalSteps: 6,
        stepDuration: 260,
        render(stepIndex) {
          const progress = Math.min(1, Math.max(0.18, stepIndex / 5));
          drawSumNumbersRecursiveCanvas(canvas, progress);
        }
      },
      "pair-sum": {
        totalSteps: 6,
        stepDuration: 420,
        render(stepIndex) {
          const progress = Math.min(0.99, Math.max(0.12, stepIndex / 6));
          drawPairSumCanvas(canvas, progress);
        }
      }
    };

    const config = configs[type];
    if (!config) {
      return null;
    }

    let currentStep = 0;
    let isPlaying = false;

    const renderCurrent = () => {
      config.render(currentStep);
    };

    const play = () => {
      cancelCanvasAnimation(canvas);
      isPlaying = true;

      const tick = () => {
        renderCurrent();
        if (!isPlaying) {
          return;
        }
        if (currentStep >= config.totalSteps - 1) {
          isPlaying = false;
          return;
        }
        currentStep += 1;
        canvas._animationFrameId = requestAnimationFrame(() => {
          setTimeout(tick, config.stepDuration);
        });
      };

      tick();
    };

    const pause = () => {
      isPlaying = false;
      cancelCanvasAnimation(canvas);
    };

    const next = () => {
      pause();
      currentStep = Math.min(config.totalSteps - 1, currentStep + 1);
      renderCurrent();
    };

    const prev = () => {
      pause();
      currentStep = Math.max(0, currentStep - 1);
      renderCurrent();
    };

    const replay = () => {
      currentStep = 0;
      play();
    };

    const reset = () => {
      pause();
      currentStep = 0;
      renderCurrent();
    };

    const showStep = (stepIndex = 0) => {
      pause();
      currentStep = Math.max(0, Math.min(config.totalSteps - 1, stepIndex));
      renderCurrent();
    };

    renderCurrent();

    return {
      play,
      pause,
      next,
      prev,
      replay,
      reset,
      showStep,
      getState() {
        return {
          currentStep,
          totalSteps: config.totalSteps,
          isPlaying
        };
      }
    };
  };

  const mountCanvasVisualization = (canvas, type) => {
    const controller = createCanvasController(canvas, type);
    if (controller) {
      canvas._visualizationController = controller;
    }
    return controller;
  };

  window.StructyVisualizations = {
    getTextVisualization(taskKey) {
      return textVisualizations[taskKey] || null;
    },
    getCanvasType(taskKey) {
      return canvasVisualizationTypes[taskKey] || null;
    },
    getCanvasVisualizations(taskKey) {
      if (canvasVisualizationVariants[taskKey]) {
        return canvasVisualizationVariants[taskKey];
      }
      const type = canvasVisualizationTypes[taskKey];
      if (!type) {
        return [];
      }
      return [
        {
          id: type,
          type,
          title: "Canvas Visualization",
          description: "Покрокова візуалізація алгоритму для цієї задачі."
        }
      ];
    },
    createCanvasController,
    mountCanvasVisualization
  };
})();
