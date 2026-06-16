<?php
session_start();
include('./Data/GetData.php');

include_once('index_view.php');



if (isset($_POST['username'])) {
    if ($_POST['username'] === '') {
        $_SESSION['username'] = '';
    } else {
        $_SESSION['username'] = htmlspecialchars($_POST['username']);
    }
}
?>
<script>
  <?php if (!empty($_SESSION['username'])): ?>
    document.addEventListener('DOMContentLoaded', function() {
      username = "<?= htmlspecialchars($_SESSION['username'], ENT_QUOTES) ?>";
      Startup_Sequence();
    });
  <?php endif; ?>
</script>

